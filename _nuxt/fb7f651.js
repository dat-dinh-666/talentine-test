(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{407:function(t,e,r){var content=r(418);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("8a868acc",content,!0,{sourceMap:!1})},408:function(t,e,r){var content=r(420);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("02049dd7",content,!0,{sourceMap:!1})},409:function(t,e,r){var content=r(422);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("3d17eec2",content,!0,{sourceMap:!1})},410:function(t,e,r){var content=r(424);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("599601c2",content,!0,{sourceMap:!1})},411:function(t,e,r){var content=r(426);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("503fb438",content,!0,{sourceMap:!1})},412:function(t,e,r){var content=r(430);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("cad92cae",content,!0,{sourceMap:!1})},413:function(t,e,r){"use strict";r.r(e);var n={props:{headline:{default:null,type:String,required:!0},subheadline:{default:null,type:String},color:{default:"green",type:String}}},o=(r(425),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.subheadline?r("p",{class:"subheadline "+t.color,domProps:{innerHTML:t._s(t.subheadline)}}):t._e(),t._v(" "),r("h2",{domProps:{innerHTML:t._s(t.headline)}})])}),[],!1,null,"4cabee56",null);e.default=component.exports},414:function(t,e,r){"use strict";r.r(e);r(29),r(24),r(32);var n={props:{url:{default:null,type:String},external:{default:!1,type:Boolean},title:{default:null,type:String,required:!0},color:{default:null,type:String},download:{default:null,type:String},image:{default:null,type:String}},computed:{parsedUrl:function(){if(!this.url)return!1;var t=this.localePath(this.basePath+this.url).replace(/\/\//g,"/");return!!this.$router.resolve(t).resolved.name&&t},basePath:function(){return this.$store.state.navigation.baseRoute}}},o=(r(429),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.url||t.external||t.download?t.parsedUrl?[r("nuxt-link",{class:"button shadow "+t.color,attrs:{to:t.parsedUrl}},[t._v("\n      "+t._s(t.title)+"\n    ")])]:[t.url&&t.external&&!t.download?r("a",{class:"button shadow "+t.color,attrs:{href:t.url,rel:"norefferer noopener",target:"_blank"}},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.url&&t.download?r("a",{class:"button shadow "+t.color,attrs:{href:t.url,download:""}},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e()]:r("button",{class:"button shadow "+t.color,on:{click:function(e){return e.preventDefault(),t.$emit("button-clicked")}}},[t.image?r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.image}}):t._e(),t._v(" "),r("span",[t._v(t._s(t.title))])])],2)}),[],!1,null,"f26ff70e",null);e.default=component.exports},415:function(t,e,r){"use strict";r.r(e);var n={name:"VLoader"},o=(r(421),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader"},[r("div",{staticClass:"loading-animation"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 115.29 110.54"}},[r("g",{attrs:{id:"Ebene_2","data-name":"Ebene 2"}},[r("g",{attrs:{id:"Layer_1","data-name":"Layer 1"}},[r("polygon",{staticClass:"cls-1",attrs:{points:"0 22.11 0 66.32 28.82 44.22 0 22.11"}}),t._v(" "),r("polygon",{staticClass:"cls-2",attrs:{points:"28.82 44.22 28.82 0 0 22.11 28.82 44.22"}}),t._v(" "),r("polygon",{staticClass:"cls-3",attrs:{points:"28.82 88.43 28.82 44.22 0 66.32 28.82 88.43"}}),t._v(" "),r("polygon",{staticClass:"cls-4",attrs:{points:"28.82 0 28.82 44.22 57.64 22.11 28.82 0"}}),t._v(" "),r("polygon",{staticClass:"cls-5",attrs:{points:"28.82 44.22 28.82 88.43 57.64 66.32 28.82 44.22"}}),t._v(" "),r("polygon",{staticClass:"cls-6",attrs:{points:"57.64 22.11 57.64 66.32 86.47 44.22 57.64 22.11"}}),t._v(" "),r("polygon",{staticClass:"cls-7",attrs:{points:"57.64 66.32 57.64 110.54 86.47 88.43 57.64 66.32"}}),t._v(" "),r("polygon",{staticClass:"cls-8",attrs:{points:"86.47 44.22 86.47 88.43 115.29 66.32 86.47 44.22"}}),t._v(" "),r("polygon",{staticClass:"cls-9",attrs:{points:"86.47 0 86.47 44.22 115.29 22.11 86.47 0"}}),t._v(" "),r("polygon",{staticClass:"cls-10",attrs:{points:"57.64 66.32 57.64 22.11 28.82 44.22 57.64 66.32"}}),t._v(" "),r("polygon",{staticClass:"cls-11",attrs:{points:"86.47 44.22 86.47 0 57.64 22.11 86.47 44.22"}}),t._v(" "),r("polygon",{staticClass:"cls-12",attrs:{points:"86.47 88.43 86.47 44.22 57.64 66.32 86.47 88.43"}}),t._v(" "),r("polygon",{staticClass:"cls-13",attrs:{points:"57.64 110.54 57.64 66.32 28.82 88.43 57.64 110.54"}}),t._v(" "),r("polygon",{staticClass:"cls-14",attrs:{points:"115.29 66.32 115.29 22.11 86.47 44.22 115.29 66.32"}})])])])])])}),[],!1,null,"0115d19b",null);e.default=component.exports},416:function(t,e,r){"use strict";r.r(e);var n={props:{fetchState:{default:function(){return{pending:!1,error:!1}},type:Object}}},o=(r(417),r(12)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fetch-fade"}},[e("div",{staticClass:"fetch"},[this.fetchState.pending?e("v-pending"):this._e(),this._v(" "),this.fetchState.error?e("v-error",{attrs:{message:this.fetchState.error.message}}):this._e()],1)])}),[],!1,null,"5f44b7b6",null);e.default=component.exports;installComponents(component,{VPending:r(427).default,VError:r(428).default})},417:function(t,e,r){"use strict";var n=r(407);r.n(n).a},418:function(t,e,r){(e=r(16)(!1)).push([t.i,".fetch-fade-enter[data-v-5f44b7b6],.fetch-fade-leave-to[data-v-5f44b7b6]{opacity:0}.fetch-fade-enter-active[data-v-5f44b7b6],.fetch-fade-leave-active[data-v-5f44b7b6]{transition:opacity .3s ease}",""]),t.exports=e},419:function(t,e,r){"use strict";var n=r(408);r.n(n).a},420:function(t,e,r){(e=r(16)(!1)).push([t.i,".pending[data-v-66b20942]{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;background:var(--color-dark)}",""]),t.exports=e},421:function(t,e,r){"use strict";var n=r(409);r.n(n).a},422:function(t,e,r){(e=r(16)(!1)).push([t.i,".loader[data-v-0115d19b]{position:relative;z-index:1;height:100%;width:100%}.loading-animation[data-v-0115d19b]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.loading-animation svg[data-v-0115d19b]{height:5em;display:block;width:5em;-webkit-animation:heart-loader-data-v-0115d19b 1.2s cubic-bezier(.215,.61,.355,1) infinite;animation:heart-loader-data-v-0115d19b 1.2s cubic-bezier(.215,.61,.355,1) infinite}@-webkit-keyframes heart-loader-data-v-0115d19b{0%{transform:scale(.95)}5%{transform:scale(1.1)}39%{transform:scale(.85)}45%{transform:scale(1)}60%{transform:scale(.95)}to{transform:scale(.9)}}@keyframes heart-loader-data-v-0115d19b{0%{transform:scale(.95)}5%{transform:scale(1.1)}39%{transform:scale(.85)}45%{transform:scale(1)}60%{transform:scale(.95)}to{transform:scale(.9)}}.cls-1[data-v-0115d19b]{fill:#173d1e}.cls-2[data-v-0115d19b]{fill:#ff0096}.cls-3[data-v-0115d19b]{fill:#aaffe5}.cls-4[data-v-0115d19b]{fill:#dc0073}.cls-5[data-v-0115d19b]{fill:#49b637}.cls-6[data-v-0115d19b]{fill:#ab92bf}.cls-7[data-v-0115d19b]{fill:#173753}.cls-8[data-v-0115d19b]{fill:#20d2f4}.cls-9[data-v-0115d19b]{fill:#69ff47}.cls-10[data-v-0115d19b]{fill:#8c1a6a}.cls-11[data-v-0115d19b]{fill:#494947}.cls-12[data-v-0115d19b]{fill:#231651}.cls-13[data-v-0115d19b]{fill:#0f0}.cls-14[data-v-0115d19b]{fill:#e4ff1a}",""]),t.exports=e},423:function(t,e,r){"use strict";var n=r(410);r.n(n).a},424:function(t,e,r){(e=r(16)(!1)).push([t.i,".erorr[data-v-f0b9b1de]{padding:var(--space-v-l) var(--space-h-l);height:100%;width:100%;display:flex;align-items:center;justify-content:center}",""]),t.exports=e},425:function(t,e,r){"use strict";var n=r(411);r.n(n).a},426:function(t,e,r){(e=r(16)(!1)).push([t.i,".headline[data-v-4cabee56]{font-weight:700;margin:0 0 var(--space-v-l)}.subheadline[data-v-4cabee56]{font-weight:600;margin:0}.subheadline[data-v-4cabee56],.subheadline.green[data-v-4cabee56]{color:var(--color-green)}.subheadline.pink[data-v-4cabee56]{color:var(--color-pink)}.subheadline.blue[data-v-4cabee56]{color:var(--color-blue)}",""]),t.exports=e},427:function(t,e,r){"use strict";r.r(e);var n={},o=(r(419),r(12)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pending"},[e("v-loader")],1)}),[],!1,null,"66b20942",null);e.default=component.exports;installComponents(component,{VLoader:r(415).default})},428:function(t,e,r){"use strict";r.r(e);var n={props:{message:{type:String,default:null}}},o=(r(423),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error"},[r("h1",[t._v(t._s(t.$t("error.fetching.title")))]),t._v(" "),r("p",[t._v(t._s(t.$t("error.fetching.description"))+" "+t._s(t.message))])])}),[],!1,null,"f0b9b1de",null);e.default=component.exports},429:function(t,e,r){"use strict";var n=r(412);r.n(n).a},430:function(t,e,r){(e=r(16)(!1)).push([t.i,".button[data-v-f26ff70e]{background-color:var(--color-dark);border-radius:var(--border-radius-m);color:var(--color-light);display:block;font-weight:700;margin:0 0 var(--space-v-s);padding:var(--space-v-s) var(--space-h-m);text-align:center;text-decoration:none;width:100%}.button img[data-v-f26ff70e]{display:inline-block;margin:-.5rem .5rem -.5rem 0;width:2rem}.button img[data-v-f26ff70e],.button span[data-v-f26ff70e]{vertical-align:middle}.button.green[data-v-f26ff70e]{background-color:var(--color-green);color:var(--color-dark)}.button.blue[data-v-f26ff70e]{background-color:var(--color-blue);color:var(--color-dark)}.button.pink[data-v-f26ff70e]{background-color:var(--color-pink);color:var(--color-dark)}.button.light[data-v-f26ff70e]{background-color:var(--color-light);color:var(--color-dark)}@media (min-width:700px){.button[data-v-f26ff70e]{display:inline-block;width:unset}}",""]),t.exports=e},527:function(t,e,r){var content=r(649);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("c1578054",content,!0,{sourceMap:!1})},648:function(t,e,r){"use strict";var n=r(527);r.n(n).a},649:function(t,e,r){(e=r(16)(!1)).push([t.i,'.page-exhibitor[data-v-7c004374]{overflow-x:hidden}main[data-v-7c004374]{padding:var(--space-v-m) var(--space-h-s)}.header-content[data-v-7c004374]{display:grid;grid-gap:var(--space-v-m) var(--space-h-m);grid-template-columns:1fr 3fr;margin:-2rem auto 0;max-width:var(--width-main);padding:0 var(--space-h-s)}.exhibitor-header-image[data-v-7c004374]{max-height:40rem;overflow:hidden;position:relative}.exhibitor-header-image img[data-v-7c004374]{height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%}.exhibitor-header-image[data-v-7c004374]:after{background:linear-gradient(rgba(20,19,28,.3),#14131c);bottom:0;content:"";left:0;position:absolute;right:0;top:0}.exhibitor-logo[data-v-7c004374]{align-items:center;justify-content:center;background:var(--color-light);display:flex;height:4rem;width:4rem;padding:var(--space-v-xs) var(--space-h-xs);z-index:1}.exhibitor-logo[data-v-7c004374],.exhibitor-logo img[data-v-7c004374]{border-radius:var(--border-radius-l)}.exhibitor-title[data-v-7c004374]{position:relative;z-index:1}.facts[data-v-7c004374]{display:grid;grid-gap:var(--space-v-s) var(--space-h-s);padding:var(--space-v-s) var(--space-h-s)}.facts-item[data-v-7c004374]{font-weight:700}.facts-item .subheadline[data-v-7c004374]{color:var(--color-green);font-size:var(--font-size-m)}.description-title[data-v-7c004374]{max-width:48rem}.description[data-v-7c004374]{margin:var(--space-v-l) 0 0}.description .html-content[data-v-7c004374]{color:var(--color-grey-light);font-size:var(--font-size-l)}.gallery[data-v-7c004374],.jobs[data-v-7c004374]{margin:var(--space-v-xl) 0}.jobs .headline[data-v-7c004374]{text-align:center}.jobs .offer[data-v-7c004374]{margin:var(--space-v-l) 0;color:var(--color-grey-light)}.jobs .offer-title[data-v-7c004374]{font-weight:400;font-size:var(--font-size-l)}.jobs .cta[data-v-7c004374]{text-align:center}.contact-persons[data-v-7c004374]{margin:var(--space-v-xl) 0}.contact-persons-wrapper[data-v-7c004374]{margin:var(--space-v-l) 0;display:grid;grid-gap:var(--space-v-s) var(--space-h-s)}.career-button[data-v-7c004374],.contact-button[data-v-7c004374]{text-align:center}.career-button[data-v-7c004374]{margin-top:var(--space-v-l)}.agenda[data-v-7c004374]{margin:var(--space-v-xl) 0}.agenda .headline[data-v-7c004374]{margin:var(--space-v-l) 0}.agenda .agenda-item[data-v-7c004374]{margin:var(--space-v-m) 0}@media (min-width:500px){.exhibitor-logo[data-v-7c004374]{height:6rem;width:6rem}.header-content[data-v-7c004374]{margin:-3rem auto 0}}.contact-buttons[data-v-7c004374]{display:flex;flex-wrap:wrap;margin:0 calc(var(--space-h-s)*-1)}.contact-buttons .contact-button[data-v-7c004374]{margin:0 var(--space-h-s)}@media (min-width:700px){main[data-v-7c004374]{padding:var(--space-v-m) var(--space-h-m)}.contact-persons-wrapper[data-v-7c004374]{grid-template-columns:repeat(2,1fr)}.description .html-content[data-v-7c004374]{-moz-columns:2;column-count:2}.exhibitor-logo[data-v-7c004374]{height:10rem;width:10rem}.facts[data-v-7c004374]{grid-template-columns:repeat(2,1fr)}.header-content[data-v-7c004374]{padding:0 var(--space-h-m);margin:-5rem auto 0}}@media (min-width:1200px){.facts[data-v-7c004374]{grid-template-columns:repeat(4,1fr)}}',""]),t.exports=e},724:function(t,e,r){"use strict";r.r(e);r(46),r(45),r(10),r(33),r(63),r(54);var n=r(25),o=(r(15),r(3)),l=r(64);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"ArbeitgeberDetail",layout:"event",validate:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,t.query,n=t.store,e.next=3,n.dispatch("eventExhibitor/fetchOne",r.id);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.$store.dispatch("eventExhibitor/fetchAll"),t.$store.dispatch("agendaItem/fetchAll"),t.$store.dispatch("stage/fetchAll"),t.$store.dispatch("fieldOfWork/fetchAll"),t.$store.dispatch("sector/fetchAll")]);case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{id:this.$route.params.id,updateValue:0}},computed:d(d(d({},Object(l.b)({exhibitors:"eventExhibitor/getAll",agendaItems:"agendaItem/getAll",stages:"stage/getAll",fieldsOfWork:"fieldOfWork/getAll",sectors:"sector/getAll"})),Object(l.c)({basePath:function(t){return t.navigation.baseRoute}})),{},{exhibitor:function(){return this.$store.getters["eventExhibitor/getOne"](this.id)},sector:function(){var t=this;return this.exhibitor.properties?this.sectors.find((function(e){return e.slug===t.exhibitor.properties.sectors[0]})):[]},fieldOfWork:function(){var t=this;return this.exhibitor.properties?this.fieldsOfWork.find((function(e){return e.slug===t.exhibitor.properties.fieldsOfWork[0]})):[]},agendaItemsOfExhibitor:function(){var t=this;return this.agendaItems.filter((function(e){return e.exhibitors&&e.exhibitors.find((function(e){return e===t.exhibitor.slug}))})).sort((function(a,b){return t.$moment(a.timeStart)-t.$moment(b.timeStart)}))},videos:function(){var t=[];return this.exhibitor.videoImage&&t.unshift({type:"video",url:this.exhibitor.videoImage}),this.exhibitor.videoMatching&&t.unshift({type:"video",url:this.exhibitor.videoMatching}),t},locationHeadline:function(){return this.exhibitor.locations.length>1?"Standorte":"Standort"}}),mounted:function(){setInterval(this.updateTime,6e5)},destroyed:function(){clearInterval(this.updateTime)},methods:{updateTime:function(){this.updateValue=this.$moment().valueOf()}}},f=(r(648),r(12)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.exhibitor||!t.$fetchState.pending&&!t.$fetchState.error?r("div",{staticClass:"page-exhibitor"},[r("div",{staticClass:"exhibitor-header"},[r("div",{staticClass:"exhibitor-header-image"},[t.exhibitor.headerImage?r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.exhibitor.headerImage,alt:"Header Image\n      "+t.exhibitor.title}}):t._e()]),t._v(" "),r("div",{staticClass:"container header-content"},[t.exhibitor.logo?r("div",{staticClass:"exhibitor-logo"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.exhibitor.logo,alt:"Logo von "+t.exhibitor.title}})]):t._e(),t._v(" "),r("div",{staticClass:"exhibitor-title"},[r("h1",[t._v(t._s(t.exhibitor.title))])])])]),t._v(" "),r("main",[r("div",{staticClass:"facts shadow tile"},[t.sector&&t.sector.title?r("div",{staticClass:"facts-item"},[r("p",{staticClass:"subheadline"},[t._v("Branche")]),t._v(" "),r("p",{staticClass:"headline"},[t._v(t._s(t.sector.title))])]):t._e(),t._v(" "),t.exhibitor.locations?r("div",{staticClass:"facts-item"},[r("p",{staticClass:"subheadline"},[t._v(t._s(t.locationHeadline))]),t._v(" "),r("p",{staticClass:"headline"},[t._v("\n          "+t._s(t.exhibitor.locations.map((function(t){return t})).join(", "))+"\n        ")])]):t._e(),t._v(" "),t.exhibitor.employeesCount?r("div",{staticClass:"facts-item"},[r("p",{staticClass:"subheadline"},[t._v("Mitarbeiter")]),t._v(" "),r("p",{staticClass:"headline"},[t._v(t._s(t.exhibitor.employeesCount))])]):t._e(),t._v(" "),t.exhibitor.website?r("div",{staticClass:"facts-item"},[r("p",{staticClass:"subheadline"},[t._v("Website")]),t._v(" "),r("p",{staticClass:"headline"},[r("a",{ref:"noreferrer noopener",attrs:{href:t.exhibitor.website}},[t._v("\n            "+t._s(t.exhibitor.websiteTitle||t.exhibitor.website)+"\n          ")])])]):t._e()]),t._v(" "),r("div",{staticClass:"description"},[r("div",{staticClass:"container"},[r("h2",{staticClass:"description-title"},[t._v(t._s(t.exhibitor.headline))]),t._v(" "),r("div",{staticClass:"html-content",domProps:{innerHTML:t._s(t.$md.render(t.exhibitor.description))}})])]),t._v(" "),t.exhibitor.images&&t.exhibitor.images.length||t.videos&&t.videos.length?r("div",{staticClass:"gallery"},[r("lazy-v-image-gallery",{attrs:{images:t.exhibitor.images,videos:t.videos}})],1):t._e(),t._v(" "),t.exhibitor.jobOffers&&t.exhibitor.jobOffers.length?r("div",{staticClass:"jobs"},[r("div",{staticClass:"container"},[r("v-headline",{attrs:{color:"green",subheadline:t.$t("jobOffers.subheadline"),headline:t.$t("jobOffers.headline")}}),t._v(" "),t._l(t.exhibitor.jobOffers,(function(e){return r("div",{key:e.title+e.description,staticClass:"offer"},[r("lazy-v-accordion",{scopedSlots:t._u([{key:"accordionTitle",fn:function(){return[r("span",[t._v(t._s(e.title))])]},proxy:!0},{key:"accordionBody",fn:function(){return[r("div",{ref:"accordionBody",refInFor:!0,staticClass:"offer-description",domProps:{innerHTML:t._s(t.$md.render(e.description))}})]},proxy:!0}],null,!0)})],1)})),t._v(" "),t.exhibitor.websiteCareers?r("v-button",{staticClass:"career-button",attrs:{title:"Zum Karrierebereich",external:!0,color:"green",url:t.exhibitor.websiteCareers}}):t._e()],2)]):t._e(),t._v(" "),!t.exhibitor.websiteCareers||t.exhibitor.jobOffers&&t.exhibitor.jobOffers.length?t._e():r("v-button",{staticClass:"career-button",attrs:{title:"Zum Karrierebereich",external:!0,color:"green",url:t.exhibitor.websiteCareers}}),t._v(" "),t.agendaItemsOfExhibitor&&t.agendaItemsOfExhibitor.length?r("div",{staticClass:"agenda"},[r("div",{staticClass:"container"},[r("v-headline",{attrs:{headline:"Unsere Programmpunkte"}}),t._v(" "),t._l(t.agendaItemsOfExhibitor,(function(e){return r("lazy-v-agenda-item",{key:String(e.slug)+"-"+String(t.updateValue),attrs:{"agenda-item":e,stages:t.stages,exhibitors:t.exhibitors}})}))],2)]):t._e(),t._v(" "),t.exhibitor.contactPersons&&t.exhibitor.contactPersons.length?r("div",{staticClass:"contact-persons"},[r("div",{staticClass:"container"},[r("v-headline",{attrs:{headline:"Unsere Ansprechpartner"}}),t._v(" "),r("div",{staticClass:"contact-persons-wrapper"},t._l(t.exhibitor.contactPersons,(function(t){return r("lazy-v-contact-person",{key:t.name,attrs:{"contact-person":t}})})),1),t._v(" "),t.exhibitor.contactButton&&t.exhibitor.contactButton.length?r("div",{staticClass:"contact-buttons"},t._l(t.exhibitor.contactButton,(function(t){return r("v-button",{key:t.url,staticClass:"contact-button",attrs:{title:t.title,external:!0,color:"green",url:t.url}})})),1):t._e()],1)]):t._e(),t._v(" "),t.exhibitor.members&&t.exhibitor.members.length?r("div",{staticClass:"members"},[r("div",{staticClass:"container"},[r("v-headline",{attrs:{headline:"Unsere Mitglieder"}}),t._v(" "),r("div",{staticClass:"members-wrapper"},[r("lazy-exhibitor-list",{attrs:{likeable:!1,exhibitors:t.exhibitor.members}})],1)],1)]):t._e()],1),t._v(" "),t.exhibitor.contactButton&&t.exhibitor.contactButton.length&&t.exhibitor.contactButton.url?r("lazy-v-floating-button",{attrs:{title:t.exhibitor.contactButton[0].title,external:!0,url:t.exhibitor.contactButton[0].url}}):t._e()],1):r("v-fetch",{attrs:{"fetch-state":t.$fetchState}})}),[],!1,null,"7c004374",null);e.default=component.exports;installComponents(component,{VFetch:r(416).default,LazyVImageGallery:function(){return r.e(11).then(r.bind(null,729)).then((function(t){return t.default||t}))},VHeadline:r(413).default,LazyVAccordion:function(){return r.e(15).then(r.bind(null,457)).then((function(t){return t.default||t}))},VButton:r(414).default,LazyVAgendaItem:function(){return r.e(7).then(r.bind(null,564)).then((function(t){return t.default||t}))},LazyVContactPerson:function(){return r.e(16).then(r.bind(null,558)).then((function(t){return t.default||t}))},LazyExhibitorList:function(){return r.e(10).then(r.bind(null,563)).then((function(t){return t.default||t}))},LazyVFloatingButton:function(){return r.e(18).then(r.bind(null,730)).then((function(t){return t.default||t}))}})}}]);