(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{407:function(t,e,r){var content=r(418);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("8a868acc",content,!0,{sourceMap:!1})},408:function(t,e,r){var content=r(420);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("02049dd7",content,!0,{sourceMap:!1})},409:function(t,e,r){var content=r(422);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("3d17eec2",content,!0,{sourceMap:!1})},410:function(t,e,r){var content=r(424);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("599601c2",content,!0,{sourceMap:!1})},411:function(t,e,r){var content=r(426);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("503fb438",content,!0,{sourceMap:!1})},412:function(t,e,r){var content=r(430);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("cad92cae",content,!0,{sourceMap:!1})},413:function(t,e,r){"use strict";r.r(e);var l={props:{headline:{default:null,type:String,required:!0},subheadline:{default:null,type:String},color:{default:"green",type:String}}},n=(r(425),r(12)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.subheadline?r("p",{class:"subheadline "+t.color,domProps:{innerHTML:t._s(t.subheadline)}}):t._e(),t._v(" "),r("h2",{domProps:{innerHTML:t._s(t.headline)}})])}),[],!1,null,"4cabee56",null);e.default=component.exports},414:function(t,e,r){"use strict";r.r(e);r(29),r(24),r(32);var l={props:{url:{default:null,type:String},external:{default:!1,type:Boolean},title:{default:null,type:String,required:!0},color:{default:null,type:String},download:{default:null,type:String},image:{default:null,type:String}},computed:{parsedUrl:function(){if(!this.url)return!1;var t=this.localePath(this.basePath+this.url).replace(/\/\//g,"/");return!!this.$router.resolve(t).resolved.name&&t},basePath:function(){return this.$store.state.navigation.baseRoute}}},n=(r(429),r(12)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.url||t.external||t.download?t.parsedUrl?[r("nuxt-link",{class:"button shadow "+t.color,attrs:{to:t.parsedUrl}},[t._v("\n      "+t._s(t.title)+"\n    ")])]:[t.url&&t.external&&!t.download?r("a",{class:"button shadow "+t.color,attrs:{href:t.url,rel:"norefferer noopener",target:"_blank"}},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.url&&t.download?r("a",{class:"button shadow "+t.color,attrs:{href:t.url,download:""}},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e()]:r("button",{class:"button shadow "+t.color,on:{click:function(e){return e.preventDefault(),t.$emit("button-clicked")}}},[t.image?r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.image}}):t._e(),t._v(" "),r("span",[t._v(t._s(t.title))])])],2)}),[],!1,null,"f26ff70e",null);e.default=component.exports},415:function(t,e,r){"use strict";r.r(e);var l={name:"VLoader"},n=(r(421),r(12)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader"},[r("div",{staticClass:"loading-animation"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 115.29 110.54"}},[r("g",{attrs:{id:"Ebene_2","data-name":"Ebene 2"}},[r("g",{attrs:{id:"Layer_1","data-name":"Layer 1"}},[r("polygon",{staticClass:"cls-1",attrs:{points:"0 22.11 0 66.32 28.82 44.22 0 22.11"}}),t._v(" "),r("polygon",{staticClass:"cls-2",attrs:{points:"28.82 44.22 28.82 0 0 22.11 28.82 44.22"}}),t._v(" "),r("polygon",{staticClass:"cls-3",attrs:{points:"28.82 88.43 28.82 44.22 0 66.32 28.82 88.43"}}),t._v(" "),r("polygon",{staticClass:"cls-4",attrs:{points:"28.82 0 28.82 44.22 57.64 22.11 28.82 0"}}),t._v(" "),r("polygon",{staticClass:"cls-5",attrs:{points:"28.82 44.22 28.82 88.43 57.64 66.32 28.82 44.22"}}),t._v(" "),r("polygon",{staticClass:"cls-6",attrs:{points:"57.64 22.11 57.64 66.32 86.47 44.22 57.64 22.11"}}),t._v(" "),r("polygon",{staticClass:"cls-7",attrs:{points:"57.64 66.32 57.64 110.54 86.47 88.43 57.64 66.32"}}),t._v(" "),r("polygon",{staticClass:"cls-8",attrs:{points:"86.47 44.22 86.47 88.43 115.29 66.32 86.47 44.22"}}),t._v(" "),r("polygon",{staticClass:"cls-9",attrs:{points:"86.47 0 86.47 44.22 115.29 22.11 86.47 0"}}),t._v(" "),r("polygon",{staticClass:"cls-10",attrs:{points:"57.64 66.32 57.64 22.11 28.82 44.22 57.64 66.32"}}),t._v(" "),r("polygon",{staticClass:"cls-11",attrs:{points:"86.47 44.22 86.47 0 57.64 22.11 86.47 44.22"}}),t._v(" "),r("polygon",{staticClass:"cls-12",attrs:{points:"86.47 88.43 86.47 44.22 57.64 66.32 86.47 88.43"}}),t._v(" "),r("polygon",{staticClass:"cls-13",attrs:{points:"57.64 110.54 57.64 66.32 28.82 88.43 57.64 110.54"}}),t._v(" "),r("polygon",{staticClass:"cls-14",attrs:{points:"115.29 66.32 115.29 22.11 86.47 44.22 115.29 66.32"}})])])])])])}),[],!1,null,"0115d19b",null);e.default=component.exports},416:function(t,e,r){"use strict";r.r(e);var l={props:{fetchState:{default:function(){return{pending:!1,error:!1}},type:Object}}},n=(r(417),r(12)),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fetch-fade"}},[e("div",{staticClass:"fetch"},[this.fetchState.pending?e("v-pending"):this._e(),this._v(" "),this.fetchState.error?e("v-error",{attrs:{message:this.fetchState.error.message}}):this._e()],1)])}),[],!1,null,"5f44b7b6",null);e.default=component.exports;installComponents(component,{VPending:r(427).default,VError:r(428).default})},417:function(t,e,r){"use strict";var l=r(407);r.n(l).a},418:function(t,e,r){(e=r(16)(!1)).push([t.i,".fetch-fade-enter[data-v-5f44b7b6],.fetch-fade-leave-to[data-v-5f44b7b6]{opacity:0}.fetch-fade-enter-active[data-v-5f44b7b6],.fetch-fade-leave-active[data-v-5f44b7b6]{transition:opacity .3s ease}",""]),t.exports=e},419:function(t,e,r){"use strict";var l=r(408);r.n(l).a},420:function(t,e,r){(e=r(16)(!1)).push([t.i,".pending[data-v-66b20942]{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;background:var(--color-dark)}",""]),t.exports=e},421:function(t,e,r){"use strict";var l=r(409);r.n(l).a},422:function(t,e,r){(e=r(16)(!1)).push([t.i,".loader[data-v-0115d19b]{position:relative;z-index:1;height:100%;width:100%}.loading-animation[data-v-0115d19b]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.loading-animation svg[data-v-0115d19b]{height:5em;display:block;width:5em;-webkit-animation:heart-loader-data-v-0115d19b 1.2s cubic-bezier(.215,.61,.355,1) infinite;animation:heart-loader-data-v-0115d19b 1.2s cubic-bezier(.215,.61,.355,1) infinite}@-webkit-keyframes heart-loader-data-v-0115d19b{0%{transform:scale(.95)}5%{transform:scale(1.1)}39%{transform:scale(.85)}45%{transform:scale(1)}60%{transform:scale(.95)}to{transform:scale(.9)}}@keyframes heart-loader-data-v-0115d19b{0%{transform:scale(.95)}5%{transform:scale(1.1)}39%{transform:scale(.85)}45%{transform:scale(1)}60%{transform:scale(.95)}to{transform:scale(.9)}}.cls-1[data-v-0115d19b]{fill:#173d1e}.cls-2[data-v-0115d19b]{fill:#ff0096}.cls-3[data-v-0115d19b]{fill:#aaffe5}.cls-4[data-v-0115d19b]{fill:#dc0073}.cls-5[data-v-0115d19b]{fill:#49b637}.cls-6[data-v-0115d19b]{fill:#ab92bf}.cls-7[data-v-0115d19b]{fill:#173753}.cls-8[data-v-0115d19b]{fill:#20d2f4}.cls-9[data-v-0115d19b]{fill:#69ff47}.cls-10[data-v-0115d19b]{fill:#8c1a6a}.cls-11[data-v-0115d19b]{fill:#494947}.cls-12[data-v-0115d19b]{fill:#231651}.cls-13[data-v-0115d19b]{fill:#0f0}.cls-14[data-v-0115d19b]{fill:#e4ff1a}",""]),t.exports=e},423:function(t,e,r){"use strict";var l=r(410);r.n(l).a},424:function(t,e,r){(e=r(16)(!1)).push([t.i,".erorr[data-v-f0b9b1de]{padding:var(--space-v-l) var(--space-h-l);height:100%;width:100%;display:flex;align-items:center;justify-content:center}",""]),t.exports=e},425:function(t,e,r){"use strict";var l=r(411);r.n(l).a},426:function(t,e,r){(e=r(16)(!1)).push([t.i,".headline[data-v-4cabee56]{font-weight:700;margin:0 0 var(--space-v-l)}.subheadline[data-v-4cabee56]{font-weight:600;margin:0}.subheadline[data-v-4cabee56],.subheadline.green[data-v-4cabee56]{color:var(--color-green)}.subheadline.pink[data-v-4cabee56]{color:var(--color-pink)}.subheadline.blue[data-v-4cabee56]{color:var(--color-blue)}",""]),t.exports=e},427:function(t,e,r){"use strict";r.r(e);var l={},n=(r(419),r(12)),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pending"},[e("v-loader")],1)}),[],!1,null,"66b20942",null);e.default=component.exports;installComponents(component,{VLoader:r(415).default})},428:function(t,e,r){"use strict";r.r(e);var l={props:{message:{type:String,default:null}}},n=(r(423),r(12)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error"},[r("h1",[t._v(t._s(t.$t("error.fetching.title")))]),t._v(" "),r("p",[t._v(t._s(t.$t("error.fetching.description"))+" "+t._s(t.message))])])}),[],!1,null,"f0b9b1de",null);e.default=component.exports},429:function(t,e,r){"use strict";var l=r(412);r.n(l).a},430:function(t,e,r){(e=r(16)(!1)).push([t.i,".button[data-v-f26ff70e]{background-color:var(--color-dark);border-radius:var(--border-radius-m);color:var(--color-light);display:block;font-weight:700;margin:0 0 var(--space-v-s);padding:var(--space-v-s) var(--space-h-m);text-align:center;text-decoration:none;width:100%}.button img[data-v-f26ff70e]{display:inline-block;margin:-.5rem .5rem -.5rem 0;width:2rem}.button img[data-v-f26ff70e],.button span[data-v-f26ff70e]{vertical-align:middle}.button.green[data-v-f26ff70e]{background-color:var(--color-green);color:var(--color-dark)}.button.blue[data-v-f26ff70e]{background-color:var(--color-blue);color:var(--color-dark)}.button.pink[data-v-f26ff70e]{background-color:var(--color-pink);color:var(--color-dark)}.button.light[data-v-f26ff70e]{background-color:var(--color-light);color:var(--color-dark)}@media (min-width:700px){.button[data-v-f26ff70e]{display:inline-block;width:unset}}",""]),t.exports=e},502:function(t,e,r){var content=r(608);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("6dc0915f",content,!0,{sourceMap:!1})},561:function(t,e,r){"use strict";r.r(e);var l={name:"VText"},n=(r(607),r(12)),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[e("p",[this._t("default")],2)])}),[],!1,null,"9ea13c5a",null);e.default=component.exports},607:function(t,e,r){"use strict";var l=r(502);r.n(l).a},608:function(t,e,r){(e=r(16)(!1)).push([t.i,".text[data-v-9ea13c5a]{color:var(--color-grey-light)}@media (min-width:700px){.text[data-v-9ea13c5a]{-moz-columns:2;column-count:2}}",""]),t.exports=e}}]);