(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{436:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.content},{hid:"og:title",name:"og:title",content:this.title},{hid:"og:site_name",name:"og:site_name",content:this.title},{hid:"og:url",name:"og:url",content:this.metaurl},{hid:"og:description",name:"og:description",content:this.content},{hid:"og:image",name:"og:image",content:this.metaimage},{hid:"twitter:card",name:"twitter:card",content:this.metaimage},{hid:"twitter:image",name:"twitter:image",content:this.metaimage},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:url",name:"twitter:url",content:this.metaurl},{hid:"twitter:description",name:"twitter:description",content:this.content}]}}}},493:function(e,t,n){var content=n(600);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("26712f16",content,!0,{sourceMap:!1})},599:function(e,t,n){"use strict";var r=n(493);n.n(r).a},600:function(e,t,n){(t=n(16)(!1)).push([e.i,'main[data-v-12b854a2]{padding-top:0}.page-eventseries-header[data-v-12b854a2]{display:grid}.page-eventseries-header .headline[data-v-12b854a2]{align-self:center;justify-self:center;margin:0}.headerdate[data-v-12b854a2]{margin:var(--space-h-m) var(--space-v-m)}.dateicon[data-v-12b854a2]{display:inline;margin-right:1rem;width:1rem}.partner[data-v-12b854a2]{padding:var(--space-v-s) var(--space-h-s);border-radius:var(--border-radius-l);background-color:#fff;grid-gap:var(--space-h-s);justify-items:center;align-items:center;justify-content:space-around;align-content:space-around;display:grid;grid-template-columns:repeat(auto-fill,minmax(7.5rem,1fr))}@media (min-width:590px){.partner[data-v-12b854a2]{padding:var(--space-v-m) var(--space-h-m);grid-template-columns:repeat(4,1fr)}}.listdescr[data-v-12b854a2]{margin-top:var(--space-h-l);display:grid;grid-gap:var(--space-h-m)}@media (min-width:900px){.listdescr[data-v-12b854a2]{grid-template-columns:1fr 1fr}.listdescr .headline[data-v-12b854a2]{grid-column:1/span 2}}.plan-sec[data-v-12b854a2]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:var(--space-v-grid) var(--space-h-grid);gap:var(--space-v-grid) var(--space-h-grid);margin-bottom:var(--space-v-xl);font-weight:700}@media (max-width:1100px){.plan-sec[data-v-12b854a2]{grid-template-columns:1fr}}.page-eventseries-header[data-v-12b854a2]{background-size:cover;background-repeat:no-repeat;background-position:50%;height:24rem}.page-eventseries .content[data-v-12b854a2]{display:grid;grid-gap:var(--space-v-s) var(--space-h-m)}@media (min-width:1000px){.page-eventseries .content[data-v-12b854a2]{grid-template-columns:1fr 20rem}}.page-eventseries[data-v-12b854a2] .listdescr ul{font-size:var(--font-size-l);color:var(--color-blue);list-style:none;margin:0;padding:0 0 0 1.2em;text-indent:-.9em}.page-eventseries[data-v-12b854a2] .listdescr li:before{content:"✓";color:var(--color-blue);display:block;float:left;width:1.2rem}.page-eventseries[data-v-12b854a2] .listdescr ul li{margin-bottom:var(--space-v-m)}.page-eventseries[data-v-12b854a2] .listdescr .descr{font-size:var(--font-size-l);margin-bottom:var(--space-h-m)}.page-eventseries[data-v-12b854a2] .bigsecond .subheadline{font-size:var(--font-size-3xl)}',""]),e.exports=t},715:function(e,t,n){"use strict";n.r(t);n(10),n(33),n(63),n(15);var r=n(3),l={name:"HochschultalenteRheinland",layout:"event_preview",mixins:[n(436).a],fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.$store.dispatch("pages/fetchOne","hochschultalente-rheinland"),e.$store.dispatch("events/fetchSelect",{page:"hochschultalente-rheinland",query:{category:"Hochschultalente"},sort:["timeStart","asc"]})]);case 2:case"end":return t.stop()}}),t)})))()},data:function(){return{title:"talentine.io - Infos für Arbeitgeber",content:"DO WHAT YOU LOVE WHAT YOU DO. Die neuesten Neuigkeiten rund um talentine.io",metaurl:"https://datjackson1997666.github.io"+this.$route.fullPath,metaimage:"https://datjackson1997666.github.io/img/talentine-logo.png"}},computed:{events:function(){return this.$store.getters["events/getSelect"]("hochschultalente-rheinland")},page:function(){return this.$store.getters["pages/getOne"]("hochschultalente-rheinland")}}},d=(n(599),n(12)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-eventseries"},[e.$fetchState.pending||e.$fetchState.error?[e.$fetchState.pending?n("div",{staticClass:"preload"},[e._v("Fetching posts...")]):e.$fetchState.error?n("div",{staticClass:"preload"},[e._v("\n      Error while fetching posts: "+e._s(e.$fetchState.error.message)+"\n    ")]):e._e()]:[n("div",{staticClass:"page-eventseries-header",style:"background-image: linear-gradient(rgba(20, 19, 28, 0.3) 0%, #14131c 100%), url("+e.page.header.image+")"},[n("v-headline",{staticClass:"headline center",attrs:{headline:e.page.header.headline.headline,subheadline:"",color:"pink"}})],1),e._v(" "),n("main",[e.page.textlist?n("section",[n("v-text-list",{attrs:{text:e.page.textlist.text,list:e.page.textlist.list}})],1):e._e(),e._v(" "),n("section",[e.page.eventteaser?n("lazy-v-events-teaser",{attrs:{headline:e.page.eventteaser.headline.headline,subheadline:e.page.eventteaser.headline.subheadline,current:e.page.eventteaser.current,past:e.page.eventteaser.past,items:e.events}}):e._e()],1),e._v(" "),e.page.plan?n("section",{staticClass:"plan"},[e.page.plan?n("v-headline",{staticClass:"headline center",attrs:{headline:e.page.plan.title.headline,subheadline:e.page.plan.title.subheadline,color:"blue"}}):e._e(),e._v(" "),n("v-headline",{staticClass:"headline bigsecond",attrs:{headline:e.page.plan.head1,subheadline:"01",color:"blue"}}),e._v(" "),e.page.plan.row1?n("v-plan",{staticClass:"plan-sec",attrs:{"plan-items":e.page.plan.row1}}):e._e(),e._v(" "),e.page.plan.head2?n("v-headline",{staticClass:"headline bigsecond",attrs:{headline:e.page.plan.head2,subheadline:"02",color:"pink"}}):e._e(),e._v(" "),e.page.plan.row2?n("v-plan",{staticClass:"plan-sec",attrs:{"plan-items":e.page.plan.row2}}):e._e(),e._v(" "),e.page.plan.head3?n("v-headline",{staticClass:"headline bigsecond",attrs:{headline:e.page.plan.head3,subheadline:"03",color:"green"}}):e._e(),e._v(" "),e.page.plan.row3?n("v-plan",{staticClass:"plan-sec",attrs:{"plan-items":e.page.plan.row3}}):e._e()],1):e._e(),e._v(" "),n("v-newsletter",{attrs:{action:e.page.newsletter.action,headline:e.page.newsletter.headline.headline,subheadline:e.page.newsletter.headline.subheadline,explainer:e.page.newsletter.text}}),e._v(" "),e.page.sponsor?n("section",[n("v-headline",{staticClass:"headline center",attrs:{headline:e.page.sponsor.headline.headline,subheadline:e.page.sponsor.headline.subheadline,color:"blue"}}),e._v(" "),e.page.sponsor.sponsors.length>0?n("v-sponsors",{attrs:{items:e.page.sponsor.sponsors}}):e._e()],1):e._e(),e._v(" "),n("section",{staticClass:"faq"},[e.page.faq?n("v-headline",{staticClass:"headline center",attrs:{subheadline:e.page.faq.headline.subheadline,headline:e.page.faq.headline.headline,color:"pink"}}):e._e(),e._v(" "),e._l(e.page.faq.faqs,(function(t){return n("v-accordion",{key:t.Q,scopedSlots:e._u([{key:"accordionTitle",fn:function(){return[n("span",[e._v("\n              "+e._s(t.Q)+"\n            ")])]},proxy:!0},{key:"accordionBody",fn:function(){return[n("div",{domProps:{innerHTML:e._s(t.A)}})]},proxy:!0}],null,!0)})}))],2)],1)]],2)}),[],!1,null,"12b854a2",null);t.default=component.exports;installComponents(component,{VHeadline:n(413).default,VTextList:n(546).default,LazyVEventsTeaser:function(){return n.e(9).then(n.bind(null,559)).then((function(e){return e.default||e}))},VPlan:n(547).default,VNewsletter:n(468).default,VSponsors:n(548).default,VAccordion:n(457).default})}}]);