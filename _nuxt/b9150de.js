(window.webpackJsonp=window.webpackJsonp||[]).push([[23,16],{407:function(t,e,n){var content=n(418);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("8a868acc",content,!0,{sourceMap:!1})},408:function(t,e,n){var content=n(420);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("02049dd7",content,!0,{sourceMap:!1})},409:function(t,e,n){var content=n(422);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("3d17eec2",content,!0,{sourceMap:!1})},410:function(t,e,n){var content=n(424);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("599601c2",content,!0,{sourceMap:!1})},411:function(t,e,n){var content=n(426);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("503fb438",content,!0,{sourceMap:!1})},412:function(t,e,n){var content=n(430);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("cad92cae",content,!0,{sourceMap:!1})},413:function(t,e,n){"use strict";n.r(e);var o={props:{headline:{default:null,type:String,required:!0},subheadline:{default:null,type:String},color:{default:"green",type:String}}},r=(n(425),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.subheadline?n("p",{class:"subheadline "+t.color,domProps:{innerHTML:t._s(t.subheadline)}}):t._e(),t._v(" "),n("h2",{domProps:{innerHTML:t._s(t.headline)}})])}),[],!1,null,"4cabee56",null);e.default=component.exports},414:function(t,e,n){"use strict";n.r(e);n(29),n(24),n(32);var o={props:{url:{default:null,type:String},external:{default:!1,type:Boolean},title:{default:null,type:String,required:!0},color:{default:null,type:String},download:{default:null,type:String},image:{default:null,type:String}},computed:{parsedUrl:function(){if(!this.url)return!1;var t=this.localePath(this.basePath+this.url).replace(/\/\//g,"/");return!!this.$router.resolve(t).resolved.name&&t},basePath:function(){return this.$store.state.navigation.baseRoute}}},r=(n(429),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.url||t.external||t.download?t.parsedUrl?[n("nuxt-link",{class:"button shadow "+t.color,attrs:{to:t.parsedUrl}},[t._v("\n      "+t._s(t.title)+"\n    ")])]:[t.url&&t.external&&!t.download?n("a",{class:"button shadow "+t.color,attrs:{href:t.url,rel:"norefferer noopener",target:"_blank"}},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.url&&t.download?n("a",{class:"button shadow "+t.color,attrs:{href:t.url,download:""}},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e()]:n("button",{class:"button shadow "+t.color,on:{click:function(e){return e.preventDefault(),t.$emit("button-clicked")}}},[t.image?n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.image}}):t._e(),t._v(" "),n("span",[t._v(t._s(t.title))])])],2)}),[],!1,null,"f26ff70e",null);e.default=component.exports},415:function(t,e,n){"use strict";n.r(e);var o={name:"VLoader"},r=(n(421),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("div",{staticClass:"loading-animation"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 115.29 110.54"}},[n("g",{attrs:{id:"Ebene_2","data-name":"Ebene 2"}},[n("g",{attrs:{id:"Layer_1","data-name":"Layer 1"}},[n("polygon",{staticClass:"cls-1",attrs:{points:"0 22.11 0 66.32 28.82 44.22 0 22.11"}}),t._v(" "),n("polygon",{staticClass:"cls-2",attrs:{points:"28.82 44.22 28.82 0 0 22.11 28.82 44.22"}}),t._v(" "),n("polygon",{staticClass:"cls-3",attrs:{points:"28.82 88.43 28.82 44.22 0 66.32 28.82 88.43"}}),t._v(" "),n("polygon",{staticClass:"cls-4",attrs:{points:"28.82 0 28.82 44.22 57.64 22.11 28.82 0"}}),t._v(" "),n("polygon",{staticClass:"cls-5",attrs:{points:"28.82 44.22 28.82 88.43 57.64 66.32 28.82 44.22"}}),t._v(" "),n("polygon",{staticClass:"cls-6",attrs:{points:"57.64 22.11 57.64 66.32 86.47 44.22 57.64 22.11"}}),t._v(" "),n("polygon",{staticClass:"cls-7",attrs:{points:"57.64 66.32 57.64 110.54 86.47 88.43 57.64 66.32"}}),t._v(" "),n("polygon",{staticClass:"cls-8",attrs:{points:"86.47 44.22 86.47 88.43 115.29 66.32 86.47 44.22"}}),t._v(" "),n("polygon",{staticClass:"cls-9",attrs:{points:"86.47 0 86.47 44.22 115.29 22.11 86.47 0"}}),t._v(" "),n("polygon",{staticClass:"cls-10",attrs:{points:"57.64 66.32 57.64 22.11 28.82 44.22 57.64 66.32"}}),t._v(" "),n("polygon",{staticClass:"cls-11",attrs:{points:"86.47 44.22 86.47 0 57.64 22.11 86.47 44.22"}}),t._v(" "),n("polygon",{staticClass:"cls-12",attrs:{points:"86.47 88.43 86.47 44.22 57.64 66.32 86.47 88.43"}}),t._v(" "),n("polygon",{staticClass:"cls-13",attrs:{points:"57.64 110.54 57.64 66.32 28.82 88.43 57.64 110.54"}}),t._v(" "),n("polygon",{staticClass:"cls-14",attrs:{points:"115.29 66.32 115.29 22.11 86.47 44.22 115.29 66.32"}})])])])])])}),[],!1,null,"0115d19b",null);e.default=component.exports},416:function(t,e,n){"use strict";n.r(e);var o={props:{fetchState:{default:function(){return{pending:!1,error:!1}},type:Object}}},r=(n(417),n(12)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fetch-fade"}},[e("div",{staticClass:"fetch"},[this.fetchState.pending?e("v-pending"):this._e(),this._v(" "),this.fetchState.error?e("v-error",{attrs:{message:this.fetchState.error.message}}):this._e()],1)])}),[],!1,null,"5f44b7b6",null);e.default=component.exports;installComponents(component,{VPending:n(427).default,VError:n(428).default})},417:function(t,e,n){"use strict";var o=n(407);n.n(o).a},418:function(t,e,n){(e=n(16)(!1)).push([t.i,".fetch-fade-enter[data-v-5f44b7b6],.fetch-fade-leave-to[data-v-5f44b7b6]{opacity:0}.fetch-fade-enter-active[data-v-5f44b7b6],.fetch-fade-leave-active[data-v-5f44b7b6]{transition:opacity .3s ease}",""]),t.exports=e},419:function(t,e,n){"use strict";var o=n(408);n.n(o).a},420:function(t,e,n){(e=n(16)(!1)).push([t.i,".pending[data-v-66b20942]{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;background:var(--color-dark)}",""]),t.exports=e},421:function(t,e,n){"use strict";var o=n(409);n.n(o).a},422:function(t,e,n){(e=n(16)(!1)).push([t.i,".loader[data-v-0115d19b]{position:relative;z-index:1;height:100%;width:100%}.loading-animation[data-v-0115d19b]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.loading-animation svg[data-v-0115d19b]{height:5em;display:block;width:5em;-webkit-animation:heart-loader-data-v-0115d19b 1.2s cubic-bezier(.215,.61,.355,1) infinite;animation:heart-loader-data-v-0115d19b 1.2s cubic-bezier(.215,.61,.355,1) infinite}@-webkit-keyframes heart-loader-data-v-0115d19b{0%{transform:scale(.95)}5%{transform:scale(1.1)}39%{transform:scale(.85)}45%{transform:scale(1)}60%{transform:scale(.95)}to{transform:scale(.9)}}@keyframes heart-loader-data-v-0115d19b{0%{transform:scale(.95)}5%{transform:scale(1.1)}39%{transform:scale(.85)}45%{transform:scale(1)}60%{transform:scale(.95)}to{transform:scale(.9)}}.cls-1[data-v-0115d19b]{fill:#173d1e}.cls-2[data-v-0115d19b]{fill:#ff0096}.cls-3[data-v-0115d19b]{fill:#aaffe5}.cls-4[data-v-0115d19b]{fill:#dc0073}.cls-5[data-v-0115d19b]{fill:#49b637}.cls-6[data-v-0115d19b]{fill:#ab92bf}.cls-7[data-v-0115d19b]{fill:#173753}.cls-8[data-v-0115d19b]{fill:#20d2f4}.cls-9[data-v-0115d19b]{fill:#69ff47}.cls-10[data-v-0115d19b]{fill:#8c1a6a}.cls-11[data-v-0115d19b]{fill:#494947}.cls-12[data-v-0115d19b]{fill:#231651}.cls-13[data-v-0115d19b]{fill:#0f0}.cls-14[data-v-0115d19b]{fill:#e4ff1a}",""]),t.exports=e},423:function(t,e,n){"use strict";var o=n(410);n.n(o).a},424:function(t,e,n){(e=n(16)(!1)).push([t.i,".erorr[data-v-f0b9b1de]{padding:var(--space-v-l) var(--space-h-l);height:100%;width:100%;display:flex;align-items:center;justify-content:center}",""]),t.exports=e},425:function(t,e,n){"use strict";var o=n(411);n.n(o).a},426:function(t,e,n){(e=n(16)(!1)).push([t.i,".headline[data-v-4cabee56]{font-weight:700;margin:0 0 var(--space-v-l)}.subheadline[data-v-4cabee56]{font-weight:600;margin:0}.subheadline[data-v-4cabee56],.subheadline.green[data-v-4cabee56]{color:var(--color-green)}.subheadline.pink[data-v-4cabee56]{color:var(--color-pink)}.subheadline.blue[data-v-4cabee56]{color:var(--color-blue)}",""]),t.exports=e},427:function(t,e,n){"use strict";n.r(e);var o={},r=(n(419),n(12)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pending"},[e("v-loader")],1)}),[],!1,null,"66b20942",null);e.default=component.exports;installComponents(component,{VLoader:n(415).default})},428:function(t,e,n){"use strict";n.r(e);var o={props:{message:{type:String,default:null}}},r=(n(423),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error"},[n("h1",[t._v(t._s(t.$t("error.fetching.title")))]),t._v(" "),n("p",[t._v(t._s(t.$t("error.fetching.description"))+" "+t._s(t.message))])])}),[],!1,null,"f0b9b1de",null);e.default=component.exports},429:function(t,e,n){"use strict";var o=n(412);n.n(o).a},430:function(t,e,n){(e=n(16)(!1)).push([t.i,".button[data-v-f26ff70e]{background-color:var(--color-dark);border-radius:var(--border-radius-m);color:var(--color-light);display:block;font-weight:700;margin:0 0 var(--space-v-s);padding:var(--space-v-s) var(--space-h-m);text-align:center;text-decoration:none;width:100%}.button img[data-v-f26ff70e]{display:inline-block;margin:-.5rem .5rem -.5rem 0;width:2rem}.button img[data-v-f26ff70e],.button span[data-v-f26ff70e]{vertical-align:middle}.button.green[data-v-f26ff70e]{background-color:var(--color-green);color:var(--color-dark)}.button.blue[data-v-f26ff70e]{background-color:var(--color-blue);color:var(--color-dark)}.button.pink[data-v-f26ff70e]{background-color:var(--color-pink);color:var(--color-dark)}.button.light[data-v-f26ff70e]{background-color:var(--color-light);color:var(--color-dark)}@media (min-width:700px){.button[data-v-f26ff70e]{display:inline-block;width:unset}}",""]),t.exports=e},431:function(t,e,n){var content=n(440);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("7578ba3c",content,!0,{sourceMap:!1})},436:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.content},{hid:"og:title",name:"og:title",content:this.title},{hid:"og:site_name",name:"og:site_name",content:this.title},{hid:"og:url",name:"og:url",content:this.metaurl},{hid:"og:description",name:"og:description",content:this.content},{hid:"og:image",name:"og:image",content:this.metaimage},{hid:"twitter:card",name:"twitter:card",content:this.metaimage},{hid:"twitter:image",name:"twitter:image",content:this.metaimage},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:url",name:"twitter:url",content:this.metaurl},{hid:"twitter:description",name:"twitter:description",content:this.content}]}}}},437:function(t,e,n){t.exports=n.p+"img/ca96cd4.jpg"},439:function(t,e,n){"use strict";var o=n(431);n.n(o).a},440:function(t,e,n){(e=n(16)(!1)).push([t.i,".video-element.loading[data-v-8a65291c]{height:100%;width:100%}video[data-v-8a65291c]{max-width:100%;max-height:100%;cursor:pointer;-o-object-fit:cover;object-fit:cover}video[data-v-8a65291c]:focus{outline:none}.video-element .loader[data-v-8a65291c],.video-element video[data-v-8a65291c]{position:absolute}.fade-enter[data-v-8a65291c],.fade-leave-to[data-v-8a65291c]{opacity:0}.fade-enter-active[data-v-8a65291c],.fade-leave-active[data-v-8a65291c]{transition:opacity .6s ease}",""]),t.exports=e},441:function(t,e,n){var content=n(481);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2c036f80",content,!0,{sourceMap:!1})},456:function(t,e,n){"use strict";n.r(e);n(15);var o=n(3),r={props:{poster:{default:null,type:String},url:{default:null,type:String,required:!0},active:{default:!1,type:Boolean,required:!0},lazyload:{default:!0,type:Boolean}},asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},data:function(){return{playing:!1,loading:!0,loadingClass:!0,videoDimensions:{}}},watch:{active:function(t,e){t!==e&&this.load()}},mounted:function(){this.active&&this.load()},methods:{bubbleMetaData:function(){this.loading=!1},loaded:function(){this.loading=!1,this.$emit("loaded-video-props",{videoWidth:this.$refs.video.offsetWidth,videoHeight:this.$refs.video.offsetHeight}),this.active&&(this.videoDimensions={width:this.$refs.video.offsetWidth,height:this.$refs.video.offsetHeight})},playVideo:function(){this.playing?(this.playing=!1,this.$refs.video.pause()):(this.playing=!0,this.$refs.video.play())},handlePlay:function(){this.playing=!0},handlePause:function(){this.playing=!1},play:function(){this.$refs.video.play()},pause:function(){this.$refs.video.pause()},load:function(){this.loading=!0,this.$refs.video.load()}}},l=(n(439),n(12)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:"video-element "+(t.loadingClass?"loading":"")},[o("transition",{attrs:{name:"fade"}},[t.loading?o("v-loader"):t._e()],1),t._v(" "),o("transition",{attrs:{name:"fade"},on:{afterEnter:function(e){t.loadingClass=!1}}},[o("video",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],ref:"video",attrs:{"data-src":t.active?t.url:null,"data-poster":t.poster||n(437),preload:t.active?"metadata":"none",playsinline:"",controls:"",width:t.videoDimensions.width,height:t.videoDimensions.height,"data-not-lazy":!t.lazyload},on:{play:function(e){t.$emit("video-playing"),t.handlePlay()},pause:function(e){t.$emit("video-paused"),t.handlePause()},ended:function(e){return t.$emit("video-ended")},loadedmetadata:function(e){return t.bubbleMetaData(e)},loadeddata:function(e){return t.loaded(e)},canplay:function(e){return t.$emit("canplay")}}})])],1)}),[],!1,null,"8a65291c",null);e.default=component.exports;installComponents(component,{VLoader:n(415).default})},475:function(t,e,n){var content=n(583);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4f60286c",content,!0,{sourceMap:!1})},476:function(t,e){},477:function(t,e,n){var content=n(586);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("8709f1c6",content,!0,{sourceMap:!1})},478:function(t,e,n){var content=n(588);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("424c6384",content,!0,{sourceMap:!1})},479:function(t,e,n){t.exports=n.p+"28f3ada8382612b9bfdb727503b1a6fa.svg"},480:function(t,e,n){"use strict";var o=n(441);n.n(o).a},481:function(t,e,n){(e=n(16)(!1)).push([t.i,".contact-person[data-v-06d10bb6]{display:grid}.contact-person .contact-person-picture[data-v-06d10bb6]{height:100%;max-height:24rem;overflow:hidden}.contact-person .contact-person-picture img[data-v-06d10bb6]{border-radius:var(--border-radius-l) var(--border-radius-l) 0 0;-o-object-fit:cover;object-fit:cover;width:100%}.contact-person .box-right[data-v-06d10bb6]{padding:var(--space-v-m) var(--space-h-s)}.contact-person .contact-person-position[data-v-06d10bb6]{color:var(--color-green);margin:0;font-weight:400}.contact-person .contact-person-name[data-v-06d10bb6]{margin:0 0 var(--space-v-m) 0}.contact-person .contact-person-description p[data-v-06d10bb6]{color:var(--color-grey-light);font-size:var(--font-size-m)}.contact-person-options a[data-v-06d10bb6]{display:block}.contact-person-options img[data-v-06d10bb6]{position:relative;top:.25rem;display:inline;margin-top:.625rem;margin-right:1rem}@media (min-width:500px) and (max-width:699px){.contact-person[data-v-06d10bb6]{grid-template-columns:repeat(2,1fr)}.contact-person .contact-person-picture img[data-v-06d10bb6]{border-radius:var(--border-radius-l) 0 0 var(--border-radius-l);height:100%}}@media (min-width:1100px){.contact-person[data-v-06d10bb6]{grid-template-columns:repeat(2,1fr)}.contact-person .contact-person-picture img[data-v-06d10bb6]{border-radius:var(--border-radius-l) 0 0 var(--border-radius-l);height:100%}}",""]),t.exports=e},558:function(t,e,n){"use strict";n.r(e);var o={props:{contactPerson:{default:null,type:Object,required:!0}}},r=(n(480),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact-person shadow tile"},[o("div",{staticClass:"box-left"},[o("div",{staticClass:"contact-person-picture"},[t.contactPerson.image?o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.contactPerson.image,alt:t.contactPerson.name}}):o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":n(479),alt:t.contactPerson.name}})])]),t._v(" "),o("div",{staticClass:"box-right"},[o("div",{staticClass:"contact-person-title"},[t.contactPerson.position?o("h4",{staticClass:"contact-person-position"},[t._v("\n        "+t._s(t.contactPerson.position)+"\n      ")]):t._e(),t._v(" "),o("h3",{staticClass:"contact-person-name"},[t._v(t._s(t.contactPerson.name))])]),t._v(" "),t.contactPerson.description?o("div",{staticClass:"contact-person-description"},[o("p",[t._v(t._s(t.contactPerson.description))])]):t._e(),t._v(" "),o("div",{staticClass:"contact-person-options"},t._l(t.contactPerson.contactMethods,(function(e){return o("a",{key:e.url,attrs:{href:e.url}},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.icon}}),t._v(" "+t._s(e.title)+"\n      ")])})),0)])])}),[],!1,null,"06d10bb6",null);e.default=component.exports},570:function(t,e,n){t.exports=n.p+"img/4e94a9f.jpg"},571:function(t,e,n){t.exports=n.p+"img/7ab5b75.jpg"},572:function(t,e,n){t.exports=n.p+"img/c01b041.jpg"},573:function(t,e,n){t.exports=n.p+"img/6a406f0.jpg"},574:function(t,e,n){t.exports=n.p+"img/afcd845.jpg"},575:function(t,e,n){t.exports=n.p+"f0cf6f3dad9eedadccba68533e674a93.svg"},576:function(t,e,n){t.exports=n.p+"fc9c8476bc0f4c8e4f5ea9d0c8bf3fbb.svg"},577:function(t,e,n){t.exports=n.p+"d05b73716f0416f6c46289321f8f1010.svg"},578:function(t,e,n){t.exports=n.p+"35cd6984edb1bac192913a87412190eb.svg"},579:function(t,e,n){t.exports=n.p+"ad60bd8adbd8252636fda5424c2e14c2.svg"},580:function(t,e,n){t.exports=n.p+"12c600d8cfa5eb10f785606d1b7e6ec5.svg"},581:function(t,e,n){t.exports=n.p+"71b3e7a2782499e8e33757be79d254c9.svg"},582:function(t,e,n){"use strict";var o=n(475);n.n(o).a},583:function(t,e,n){(e=n(16)(!1)).push([t.i,".header[data-v-61018892]{display:grid;grid-gap:var(--space-v-grid) var(--space-h-grid);gap:var(--space-v-grid) var(--space-h-grid);margin:0 auto var(--space-v-xxl);max-width:var(--width-main);padding:0 var(--space-h-s) var(--space-v-m)}.header .content[data-v-61018892],.header .text[data-v-61018892]{margin:0 0 var(--space-v-m)}.header .text[data-v-61018892]{color:var(--color-grey-light);max-width:48rem}.header .video-container[data-v-61018892]{padding-top:56.25%;position:relative}.header .video .player[data-v-61018892]{height:100%;position:absolute;top:0;width:100%}.header .headline[data-v-61018892]{margin:0 0 var(--space-v-m)}@media (min-width:700px){.header[data-v-61018892]{padding:8rem var(--space-h-m) var(--space-v-m)}}@media (min-width:1200px){.header[data-v-61018892]{grid-template-columns:1fr 1fr}}.content .text[data-v-61018892]{display:flex;flex-direction:column;justify-content:space-between}.formats[data-v-61018892]{margin-bottom:var(--space-v-m)}.infoboxes[data-v-61018892]{display:grid;grid-gap:var(--space-v-grid) var(--space-h-grid);gap:var(--space-v-grid) var(--space-h-grid)}@media (min-width:1200px){.infoboxes[data-v-61018892]{grid-template-columns:repeat(3,1fr)}}.platform li[data-v-61018892]{margin-bottom:var(--space-v-m)}.contact[data-v-61018892]{display:grid;grid-gap:var(--space-v-grid) var(--space-h-grid);gap:var(--space-v-grid) var(--space-h-grid)}@media (min-width:1200px){.contact[data-v-61018892]{grid-template-columns:1fr 1fr}}",""]),t.exports=e},584:function(t,e,n){"use strict";var o=n(476),r=n.n(o);e.default=r.a},585:function(t,e,n){"use strict";var o=n(477);n.n(o).a},586:function(t,e,n){(e=n(16)(!1)).push([t.i,"div[data-v-03d53e00]{background:var(--color-night);padding:var(--space-v-m) var(--space-h-s) var(--space-h-s) var(--space-v-m)}img[data-v-03d53e00]{width:3rem;padding-bottom:var(--space-v-m)}p[data-v-03d53e00]{color:var(--color-grey-light);font-size:var(--font-size-m)}.white[data-v-03d53e00]{color:var(--color-white)}.pink[data-v-03d53e00]{color:var(--color-pink)}.green[data-v-03d53e00]{color:var(--color-green)}.blue[data-v-03d53e00]{color:var(--color-blue)}",""]),t.exports=e},587:function(t,e,n){"use strict";var o=n(478);n.n(o).a},588:function(t,e,n){(e=n(16)(!1)).push([t.i,".text[data-v-73f0eb71]{color:var(--color-grey-light)}.formats[data-v-73f0eb71]{display:grid;grid-gap:var(--space-h-l)}img[data-v-73f0eb71]{border-radius:var(--border-radius-l)}h3[data-v-73f0eb71]{margin-top:var(--space-v-s)}.button[data-v-73f0eb71]{background-color:#fff}.text[data-v-73f0eb71]{display:flex;flex-direction:column;justify-content:space-between}@media (min-width:700px){img[data-v-73f0eb71]{margin:var(--space-v-s);margin-right:var(--space-h-l)}.formats[data-v-73f0eb71]{grid-template-columns:1fr 1fr}.center[data-v-73f0eb71]{text-align:left}}",""]),t.exports=e},688:function(t,e,n){"use strict";n.r(e);var o={props:{headline:{default:null,type:String},icon:{default:null,type:String},text:{default:null,type:String},color:{default:"white",type:String}}},r=(n(585),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.icon?n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.icon}}):t._e(),t._v(" "),n("h3",{class:t.color},[t._v(t._s(t.headline))]),t._v(" "),n("p",[t._v(t._s(t.text))])])}),[],!1,null,"03d53e00",null);e.default=component.exports},689:function(t,e,n){"use strict";n.r(e);var o={name:"VFormats",props:{image:{default:null,type:String},download:{default:null,type:String},buttonLink:{default:null,type:String},buttonTitle:{default:null,type:String},color:{default:"black",type:String},headline:{default:null,type:String},text:{default:null,type:String}}},r=(n(587),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"formats"},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.image}}),t._v(" "),n("div",{staticClass:"text"},[n("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.headline))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.text)}}),t._v(" "),n("v-button",{staticClass:"center",attrs:{color:t.color,title:t.buttonTitle,url:t.buttonLink,external:!0,download:t.download}})],1)])}),[],!1,null,"73f0eb71",null);e.default=component.exports;installComponents(component,{VButton:n(414).default})},711:function(t,e,n){"use strict";n.r(e);n(15);var o=n(3),r={name:"ArbeitgeberInfo",layout:"default",mixins:[n(436).a],fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("pages/fetchOne","arbeitgeber-info");case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{title:"talentine.io - Infos für Arbeitgeber",content:"DO WHAT YOU LOVE WHAT YOU DO. Die neuesten Neuigkeiten rund um talentine.io",metaurl:"https://datjackson1997666.github.io"+this.$route.fullPath,metaimage:"https://datjackson1997666.github.io/img/talentine-logo.png",contactPerson:{name:"Jörg Pfeiffer",position:"Geschäftsführer",description:"Business Development, Strategie und Vertrieb",image:"https://api.talentine.io/images/joerg-pfeiffer.jpg",contactMethods:[{icon:n(580),title:"pfeiffer@bluebird.ac",url:"mailto:pfeiffer@bluebird.ac"},{icon:n(581),title:"+49 2408 929 96 87",url:"tel:+4924089299687"}]}}},computed:{page:function(){return this.$store.getters["pages/getOne"]("arbeitgeber-info")}},head:function(){return{link:[{rel:"canonical",href:"https://datjackson1997666.github.io"+this.$route.matched[0].path}]}}},l=(n(582),n(12)),d=n(584),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"container"},[t.page||!t.$fetchState.pending&&!t.$fetchState.error?[o("section",{staticClass:"header"},[o("div",{staticClass:"content"},[o("v-headline",{attrs:{color:"pink",headline:t.page.header.title.headline,subheadline:t.page.header.title.subheadline}}),t._v(" "),o("div",{staticClass:"text"},[o("p",[t._v(t._s(t.page.header.text))]),t._v(" "),o("v-button",{attrs:{color:"pink",title:t.page.header.button},on:{"button-clicked":function(e){return t.$scrollTo("#vorteile")}}})],1)],1),t._v(" "),o("div",{staticClass:"video"},[o("div",{staticClass:"video-container"},[o("div",{staticClass:"player"},[o("v-video-element",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],ref:"video",attrs:{url:"https://api.talentine.io/images/videos/talentine-info.mp4","data-poster":n(570),active:"active"},on:{loadedVideoProps:function(e){return t.$emit("loaded-video-props",e)}}})],1)])])]),t._v(" "),o("h3",{attrs:{id:"vorteile"}},[t._v(t._s(t.page.infobox.headline))]),t._v(" "),o("section",{staticClass:"infoboxes"},[o("v-infobox",{attrs:{headline:t.page.infobox.infobox1.headline,text:t.page.infobox.infobox1.text,color:"pink"}}),t._v(" "),o("v-infobox",{attrs:{headline:t.page.infobox2.headline,text:t.page.infobox2.text,color:"blue"}}),t._v(" "),o("v-infobox",{attrs:{headline:t.page.infobox3.headline,text:t.page.infobox3.text,color:"green"}})],1),t._v(" "),o("section",[t.page&&t.page.formathead?o("v-headline",{staticClass:"center",attrs:{color:"blue",headline:t.page.formathead.headline,subheadline:t.page.formathead.subheadline}}):t._e(),t._v(" "),o("v-formats",{attrs:{image:n(571),color:"light",headline:t.page.formathead2.headline,text:t.page.formathead2.text,"button-title":t.page.formathead2.button,"button-link":"/events/ausbildungs-messe"}}),t._v(" "),o("v-formats",{attrs:{image:n(572),color:"light",headline:t.page.formathead3.headline,text:t.page.formathead3.text,"button-title":t.page.formathead3.button,"button-link":"/downloads/Hochschultalente-Rheinland-201005.pdf",download:"true"}}),t._v(" "),o("v-formats",{attrs:{image:n(573),color:"light",headline:t.page.formathead4.headline,text:t.page.formathead4.text,"button-title":t.page.formathead4.button,"button-link":"/downloads/talentine-Skill-up-Consulting-200909.pdf",download:"true"}}),t._v(" "),o("v-formats",{attrs:{image:n(574),color:"light",headline:t.page.formathead5.headline,text:t.page.formathead5.text,"button-title":t.page.formathead5.button,"button-link":"/downloads/talentine-Karriereplattform-200910.pdf",download:"true"}})],1),t._v(" "),o("section",[o("v-headline",{staticClass:"center",attrs:{color:"pink",headline:t.page.infobox4.headline,subheadline:t.page.infobox4.subheadline}}),t._v(" "),o("div",{staticClass:"text"},[o("p",[t._v(t._s(t.page.infobox4.text))])]),t._v(" "),o("div",{staticClass:"infoboxes"},[o("v-infobox",{attrs:{headline:t.page.infobox5.headline,icon:n(575),text:t.page.infobox5.text}}),t._v(" "),o("v-infobox",{attrs:{headline:t.page.infobox6.headline,icon:n(576),text:t.page.infobox6.text}}),t._v(" "),o("v-infobox",{attrs:{headline:t.page.infobox7.headline,icon:n(577),text:t.page.infobox7.text}}),t._v(" "),o("v-infobox",{attrs:{headline:t.page.infobox8.headline,icon:n(578),text:t.page.infobox8.text}}),t._v(" "),o("v-infobox",{attrs:{headline:t.page.infobox9.headline,icon:n(579),text:t.page.infobox9.text}})],1)],1),t._v(" "),o("section",[o("v-headline",{staticClass:"center",attrs:{color:"pink",headline:t.page.plattform.headline,subheadline:t.page.plattform.subheadline}}),t._v(" "),o("div",{staticClass:"platform"},[o("ul",[o("li",{domProps:{innerHTML:t._s(t.page.plattform.text1)}}),t._v(" "),o("li",{domProps:{innerHTML:t._s(t.page.plattform.text2)}}),t._v(" "),o("li",{domProps:{innerHTML:t._s(t.page.plattform.text3)}}),t._v(" "),o("li",{domProps:{innerHTML:t._s(t.page.plattform.text4)}})])])],1),t._v(" "),o("section",{staticClass:"contact"},[o("div",[o("h3",[t._v(t._s(t.page.contacthead.headline))]),t._v(" "),o("v-contact-person",{attrs:{"contact-person":t.contactPerson}})],1)])]:o("v-fetch",{attrs:{"fetch-state":t.$fetchState}})],2)}),[],!1,null,"61018892",null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports;installComponents(component,{VFetch:n(416).default,VHeadline:n(413).default,VButton:n(414).default,VVideoElement:n(456).default,VInfobox:n(688).default,VFormats:n(689).default,VContactPerson:n(558).default})}}]);