(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{501:function(e,t,r){var content=r(606);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("f865f5f6",content,!0,{sourceMap:!1})},603:function(e,t,r){e.exports=r.p+"4bdf11f4e5486914e2b1437f8a4f2294.svg"},604:function(e,t,r){e.exports=r.p+"505a3fb2baefc81cfd5982bf17edbd9f.svg"},605:function(e,t,r){"use strict";var n=r(501);r.n(n).a},606:function(e,t,r){(t=r(16)(!1)).push([e.i,"section[data-v-3cc2f843]{margin:0 0 var(--space-v-l)}.quote-image[data-v-3cc2f843]{display:grid;grid-gap:var(--space-v-s) var(--space-h-m)}.text[data-v-3cc2f843]{margin:0 0 var(--space-v-m)}.tile[data-v-3cc2f843]{padding:var(--space-v-s) var(--space-h-s)}.tile p[data-v-3cc2f843]{color:var(--color-grey-light)}.tiles[data-v-3cc2f843]{display:grid;grid-gap:var(--space-v-s) var(--space-h-s)}.banner[data-v-3cc2f843]{margin:var(--space-v-l) 0;background:var(--color-light);color:var(--color-dark);padding:var(--space-v-s) var(--space-h-s);border-radius:var(--border-radius-l)}.banner h3[data-v-3cc2f843]{text-align:center}.banner .image-wrapper[data-v-3cc2f843]{display:grid;grid-gap:var(--space-h-s) var(--space-v-s);justify-content:center;align-items:center;grid-template-columns:1fr 1fr}@media (min-width:700px){.tiles[data-v-3cc2f843]{grid-template-columns:repeat(2,1fr)}.banner .image-wrapper[data-v-3cc2f843]{grid-template-columns:1fr 1fr 1fr 1fr}}@media (min-width:1100px){.quote-image img[data-v-3cc2f843]{margin:0 0 0 var(--space-h-l)}.quote-image[data-v-3cc2f843]{grid-template-columns:repeat(2,1fr)}}",""]),e.exports=t},718:function(e,t,r){"use strict";r.r(t);r(15);var n=r(3),o={name:"BerTalentine",layout:"default",fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("pages/fetchOne","ueber-talentine");case 2:case"end":return t.stop()}}),t)})))()},computed:{page:function(){return this.$store.getters["pages/getOne"]("ueber-talentine")||!1}}},l=(r(605),r(12)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"container"},[e.page||!e.$fetchState.pending&&!e.$fetchState.error?[n("section",[e.page.header?n("v-headline",{attrs:{color:"pink",subheadline:e.page.header.title.subheadline,headline:e.page.header.title.headline}}):e._e(),e._v(" "),n("v-text",[e._v("\n        "+e._s(e.page.header.text)+"\n      ")]),e._v(" "),n("div",{staticClass:"center"},[n("v-button",{attrs:{color:"pink",title:e.page.header.button,external:!0,url:"/arbeitgeber-info"}})],1)],1),e._v(" "),n("section",{staticClass:"quote-image"},[e.page&&e.page.formathead&&e.page.formathead.text?n("lazy-v-quote",{attrs:{attribution:e.page.formathead.headline,text:e.page.formathead.text}}):e._e(),e._v(" "),n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/about-talentine.jpg"}})],1),e._v(" "),n("section",[e.page.formathead1?n("lazy-v-headline",{attrs:{color:"blue",subheadline:e.page.formathead1.subheadline,headline:e.page.formathead1.headline}}):e._e(),e._v(" "),n("div",{staticClass:"tiles"},[n("div",{staticClass:"shadow tile"},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{alt:"Bluebird","data-src":r(603)}}),e._v(" "),n("h3",[e._v("\n            "+e._s(e.page.infobox.headline)+"\n          ")]),e._v(" "),n("p",[e._v("\n            "+e._s(e.page.infobox.text)+"\n          ")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://bluebird.ac"}},[e._v(" "+e._s(e.page.infobox.link)+" ")])])]),e._v(" "),n("div",{staticClass:"shadow tile"},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{alt:"Westwerk","data-src":r(604)}}),e._v(" "),n("h3",[e._v("\n            "+e._s(e.page.infobox2.headline)+"\n          ")]),e._v(" "),n("p",[e._v(e._s(e.page.infobox2.text)+".")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://westwerk.ac"}},[e._v(e._s(e.page.infobox2.link))])])])])],1),e._v(" "),n("section",[n("div",{staticClass:"banner"},[n("h3",{staticClass:"banner-title"},[e._v("\n          "+e._s(e.page.infobox3.headline)+"\n        ")]),e._v(" "),n("div",{staticClass:"image-wrapper"},[n("a",{attrs:{href:"https://www.audimax.de/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_audimax.png",alt:"Audimax"}})]),e._v(" "),n("a",{attrs:{href:"https://www.arbeitsagentur.de",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_BAA.png",alt:"Bundesagentur für Arbeit"}})]),e._v(" "),n("a",{attrs:{href:"https://www.campus-service.com/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_campusservice.png",alt:"Campusservice"}})]),e._v(" "),n("a",{attrs:{href:"https://aachen.digital/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_digihub.png",alt:"Digihub"}})]),e._v(" "),n("a",{attrs:{href:"https://energie-informatik.de/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_energieinformatik.png",alt:"Stiftung Energieinformatik"}})]),e._v(" "),n("a",{attrs:{href:"https://www.fh-aachen.de/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_fhaachen.png",alt:"FH Aachen"}})]),e._v(" "),n("a",{attrs:{href:"https://www.iqb.de/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_iqb.png",alt:"IQB"}})]),e._v(" "),n("a",{attrs:{href:"https://jodel.com/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_jodel.png",alt:"Jodel"}})]),e._v(" "),n("a",{attrs:{href:"https://www.regina.ac/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_reginaEV.png",alt:"REGINE e.V."}})]),e._v(" "),n("a",{attrs:{href:"http://www.aachen.de/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_stadtaachen.png",alt:"Stadt Aachen"}})]),e._v(" "),n("a",{attrs:{href:"http://www.aachen.de/DE/wirtschaft_technologie/arbeit_fachkraefte/personalrekrutierung/switch/index.html",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_switch.png",alt:"Switch"}})]),e._v(" "),n("a",{attrs:{href:"https://www.vuv-aachen.de/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_vuv.png",alt:"Vuv"}})]),e._v(" "),n("a",{attrs:{href:"https://www.wfg-kreis-heinsberg.de/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_wfg.png",alt:"Wfg"}})]),e._v(" "),n("a",{attrs:{href:"https://www.dueren.de/wirtschaft-handel-2/windn",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_WINDN.png",alt:"Windn"}})]),e._v(" "),n("a",{attrs:{href:"https://www.networker.nrw/startseite.html",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/logo_networker.png",alt:"Networker"}})]),e._v(" "),n("a",{attrs:{href:"https://www.asqf.de",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/asqf_logo_2016.png",alt:"Networker"}})]),e._v(" "),n("a",{attrs:{href:"https://www.bitmi.de/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/BITMi_Logo_png.png",alt:"Audimax"}})]),e._v(" "),n("a",{attrs:{href:"https://hhc-duesseldorf.de/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/HHC-Logo.png",alt:"Audimax"}})]),e._v(" "),n("a",{attrs:{href:"http://https://www.hwk-aachen.de//",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/hwk_aachen.jpg",alt:"Audimax"}})]),e._v(" "),n("a",{attrs:{href:"https://regionaachen.de/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/region-aachen.png",alt:"Audimax"}})]),e._v(" "),n("a",{attrs:{href:"https://www.staedteregion-aachen.de/",rel:"noopener noreferrer",target:"_blank"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":"https://api.talentine.io/images/partnerlogos/staedteregion-ac.png",alt:"Audimax"}})])])])])]:n("v-fetch",{attrs:{"fetch-state":e.$fetchState}})],2)}),[],!1,null,"3cc2f843",null);t.default=component.exports;installComponents(component,{VFetch:r(416).default,VHeadline:r(413).default,VText:r(561).default,VButton:r(414).default,LazyVQuote:function(){return r.e(20).then(r.bind(null,728)).then((function(e){return e.default||e}))},LazyVHeadline:function(){return Promise.resolve().then(r.bind(null,413)).then((function(e){return e.default||e}))}})}}]);