(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{435:function(t,e,r){t.exports=r.p+"43410cb33b43d672a1ee99fedae039fe.svg"},449:function(t,e,r){var content=r(519);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("e8bc5748",content,!0,{sourceMap:!1})},450:function(t,e,r){var content=r(521);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("694eeed1",content,!0,{sourceMap:!1})},451:function(t,e,r){var content=r(523);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("52032abc",content,!0,{sourceMap:!1})},465:function(t,e,r){t.exports=r.p+"8479fdb0b41238bd0a0f08c2f8794027.svg"},518:function(t,e,r){"use strict";var o=r(449);r.n(o).a},519:function(t,e,r){(e=r(16)(!1)).push([t.i,".exhibitor-list-item[data-v-22719599]{transition:transform .2s ease}.exhibitor-list-wrapper[data-v-22719599]{display:grid;grid-gap:var(--space-h-s) var(--space-v-s)}.filter-transition-enter[data-v-22719599],.filter-transition-leave-to[data-v-22719599]{opacity:0;transform:scale(0)}.filter-transition-enter-active[data-v-22719599],.filter-transition-leave-active[data-v-22719599]{transition:opacity .2s ease,transform .2s ease}.filter-transition-leave-active[data-v-22719599]{position:absolute}@media (min-width:700px){.exhibitor-list-wrapper[data-v-22719599]{grid-template-columns:1fr 1fr}}",""]),t.exports=e},520:function(t,e,r){"use strict";var o=r(450);r.n(o).a},521:function(t,e,r){(e=r(16)(!1)).push([t.i,".box-body[data-v-44a52aca]{align-content:space-between;display:flex;flex-direction:column;height:100%;padding:var(--space-v-s) var(--space-h-s)}.box-head[data-v-44a52aca]{align-items:center;background:var(--color-light);border-radius:var(--border-radius-l) var(--border-radius-l) 0 0;display:flex;height:12rem;justify-content:center;min-height:12rem;text-align:center;cursor:pointer}.box-head img[data-v-44a52aca]{max-height:80%;max-width:80%}.buttons[data-v-44a52aca]{display:grid;grid-gap:var(--space-v-s) var(--space-h-s)}.description[data-v-44a52aca]{flex-grow:1;margin:0 0 var(--space-v-l)}.exhibitor-list-item[data-v-44a52aca]{display:flex;background:var(--color-dark);border-radius:var(--border-radius-l);flex-direction:column}.like.button[data-v-44a52aca]{cursor:pointer;height:3.6em;padding:var(--space-v-s) var(--space-h-s);position:absolute;right:0;top:0;width:3.6em}.tag[data-v-44a52aca]{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0 var(--space-v-s) var(--space-v-s) 0}.tag[data-v-44a52aca]:last-of-type{margin:0 0 var(--space-v-s) 0}.tags[data-v-44a52aca]{margin:0 0 var(--space-v-s)}.title[data-v-44a52aca]{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;word-wrap:break-word}@media (min-width:630px) and (max-width:699px){.buttons[data-v-44a52aca]{grid-template-columns:1fr 1fr}}@media (min-width:1300px){.buttons[data-v-44a52aca]{grid-template-columns:1fr 1fr}}",""]),t.exports=e},522:function(t,e,r){"use strict";var o=r(451);r.n(o).a},523:function(t,e,r){(e=r(16)(!1)).push([t.i,".exhibitor-list-item .buttons a{display:block;margin:0}.exhibitor-list-item .description p,.exhibitor-list-item .description ul{color:var(--color-grey-light);font-size:var(--font-size-m)}.exhibitor-list-item .description a{color:var(--color-grey-light);font-weight:400;text-decoration:underline}",""]),t.exports=e},552:function(t,e,r){"use strict";r.r(e);r(45),r(35);var o={props:{exhibitor:{default:null,type:Object,required:!0},likeable:{default:!0,type:Boolean},sectors:{default:null,type:Array},fieldsOfWork:{default:null,type:Array},networks:{default:null,type:Array}},computed:{basePath:function(){return this.$store.state.navigation.baseRoute},likedItem:function(){return this.$store.getters["favorites/getFavItem"](this.exhibitor.slug)},sectorsFiltered:function(){var t=this;return this.sectors&&this.exhibitor.properties&&this.exhibitor.properties.sectors?this.exhibitor.properties.sectors.map((function(e){return t.sectors.find((function(t){return t.slug===e}))})):[]},fieldsOfWorkFiltered:function(){var t=this;return this.fieldsOfWork&&this.exhibitor.properties&&this.exhibitor.properties.fieldsOfWork?this.exhibitor.properties.fieldsOfWork.map((function(e){return t.fieldsOfWork.find((function(t){return t.slug===e}))})):[]},networksFiltered:function(){var t=this;return this.networks&&this.exhibitor.properties&&this.exhibitor.properties.networks?this.exhibitor.properties.networks.map((function(e){return t.networks.find((function(t){return t.slug===e}))})):[]}},methods:{like:function(){this.$store.dispatch("favorites/toggleSelection",this.exhibitor)}}},l=(r(520),r(522),r(12)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"exhibitor-list-item shadow tile"},[o("div",{staticClass:"box-head",on:{click:function(e){t.exhibitor.slug?t.$router.push(t.localePath(t.basePath+"arbeitgeber/"+t.exhibitor.slug)):t.exhibitor.button&&t.exhibitor.button.url&&t.$router.push(t.localePath((t.basePath+t.exhibitor.button.url).replace().replace(/\/\//g,"/")))}}},[t.exhibitor.logo?o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.exhibitor.logo,alt:t.exhibitor.title}}):t._e()]),t._v(" "),o("div",{staticClass:"box-body"},[o("div",{staticClass:"tags"},[t.sectorsFiltered&&t.sectors&&t.sectorsFiltered.length===t.sectors.length&&t.sectors.length>1?o("div",[t._m(0)]):o("div",{staticClass:"tags-wrapper"},t._l(t.sectorsFiltered,(function(e){return o("div",{key:e.slug,staticClass:"tag green"},[o("span",[t._v(t._s(e.title))])])})),0),t._v(" "),t.fieldsOfWorkFiltered&&t.fieldsOfWork&&t.fieldsOfWorkFiltered.length===t.fieldsOfWork.length&&t.fieldsOfWork.length>1?o("div",[t._m(1)]):o("div",{staticClass:"tags-wrapper"},t._l(t.fieldsOfWorkFiltered,(function(e){return o("div",{key:e.slug,staticClass:"tag pink"},[o("span",[t._v(t._s(e.title))])])})),0),t._v(" "),t.networksFiltered&&t.networks&&t.networksFiltered.length===t.networks.length&&t.networks.length>1?o("div",[t._m(2)]):o("div",{staticClass:"tags-wrapper"},t._l(t.networksFiltered,(function(e){return o("div",{key:e.slug,staticClass:"tag blue"},[o("span",[t._v(t._s(e.title))])])})),0)]),t._v(" "),o("h3",{staticClass:"title"},[t._v(t._s(t.exhibitor.title))]),t._v(" "),t.exhibitor.short_description?o("div",{staticClass:"description",domProps:{innerHTML:t._s(t.$md.render(t.exhibitor.short_description||""))}}):t._e(),t._v(" "),o("div",{staticClass:"buttons"},[t.exhibitor.slug?o("v-button",{attrs:{color:"light",title:"Zum Profil",url:"arbeitgeber/"+t.exhibitor.slug}}):t._e(),t._v(" "),t.exhibitor.button&&t.exhibitor.button.url?o("v-button",{attrs:{color:"pink",title:t.exhibitor.button.title,url:t.exhibitor.button.url,external:t.exhibitor.button.external}}):t._e(),t._v(" "),t.exhibitor.contactButton&&t.exhibitor.contactButton.length?o("v-button",{attrs:{color:"green",title:t.exhibitor.contactButton[0].title,url:t.exhibitor.contactButton[0].url,external:!0}}):t._e()],1)]),t._v(" "),t.likeable?o("div",{staticClass:"like button",on:{click:function(e){return t.like()}}},[t.likedItem?o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"icon icon-heart",attrs:{"data-src":r(435),alt:"Icon Heart","data-not-lazy":""}}):o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"icon icon-heart",attrs:{"data-src":r(465),alt:"Icon Heart","data-not-lazy":""}})]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag green"},[e("span",[this._v("alle Branchen")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag pink"},[e("span",[this._v("alle Fachrichtungen")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tag blue"},[e("span",[this._v("alle Netzwerke")])])}],!1,null,"44a52aca",null);e.default=component.exports;installComponents(component,{VButton:r(414).default})},563:function(t,e,r){"use strict";r.r(e);var o={props:{exhibitors:{default:null,type:Array,reqiured:!0},likeable:{default:!0,type:Boolean},sectors:{default:null,type:Array},fieldsOfWork:{default:null,type:Array},networks:{default:null,type:Array}},methods:{beforeLeave:function(t){t.style.width=t.offsetWidth+"px",t.style.top=t.offsetTop+"px",t.style.left=t.offsetLeft+"px"}}},l=(r(518),r(12)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"exhibitor-list"},[r("transition-group",{staticClass:"exhibitor-list-wrapper",attrs:{name:"filter-transition",tag:"div"},on:{"before-leave":t.beforeLeave}},t._l(t.exhibitors,(function(e){return r("exhibitor-list-item",{key:e.slug||e.title,staticClass:"exhibitor-list-item",attrs:{exhibitor:e,likeable:t.likeable,"fields-of-work":t.fieldsOfWork,sectors:t.sectors,networks:t.networks}})})),1)],1)}),[],!1,null,"22719599",null);e.default=component.exports;installComponents(component,{ExhibitorListItem:r(552).default})}}]);