(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{445:function(t,e,n){var content=n(496);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("3a58d4bb",content,!0,{sourceMap:!1})},446:function(t,e,n){var content=n(498);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("77864b94",content,!0,{sourceMap:!1})},447:function(t,e,n){var content=n(500);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("9da234fe",content,!0,{sourceMap:!1})},495:function(t,e,n){"use strict";var r=n(445);n.n(r).a},496:function(t,e,n){(e=n(16)(!1)).push([t.i,".news-list-item[data-v-46947b24]{transition:transform .2s ease}.news-list-wrapper[data-v-46947b24]{display:grid;grid-gap:var(--space-h-s) var(--space-v-s);gap:var(--space-h-s) var(--space-v-s);grid-template-columns:repeat(auto-fit,minmax(25rem,1fr))}.filter-transition-enter[data-v-46947b24],.filter-transition-leave-to[data-v-46947b24]{opacity:0;transform:scale(0)}.filter-transition-enter-active[data-v-46947b24],.filter-transition-leave-active[data-v-46947b24]{transition:opacity .2s ease,transform .2s ease}.filter-transition-leave-active[data-v-46947b24]{position:absolute}.list-button[data-v-46947b24]{margin-top:var(--space-h-l)}@media (min-width:800px){.news-list-wrapper[data-v-46947b24]{grid-template-columns:repeat(2,1fr)}}@media (min-width:1200px){.news-list-wrapper[data-v-46947b24]{grid-template-columns:repeat(3,1fr)}}",""]),t.exports=e},497:function(t,e,n){"use strict";var r=n(446);n.n(r).a},498:function(t,e,n){(e=n(16)(!1)).push([t.i,".news-item[data-v-9e118034]{display:flex;flex-direction:column;justify-content:flex-start;margin:var(--space-v-s) 0;position:relative}.news-item[data-v-9e118034]:hover{text-decoration:none}.news-item .text[data-v-9e118034]{padding:var(--space-v-s) var(--space-h-s)}.news-item img[data-v-9e118034]{border-radius:var(--border-radius-l) var(--border-radius-l) 0 0;height:16rem;-o-object-fit:cover;object-fit:cover;width:100%}.news-item .content[data-v-9e118034]{color:var(--color-grey-light);font-size:var(--font-size-m)}.news-item h2[data-v-9e118034]{font-size:var(--font-size-xl)}",""]),t.exports=e},499:function(t,e,n){"use strict";var r=n(447);n.n(r).a},500:function(t,e,n){(e=n(16)(!1)).push([t.i,".news-item .text em{font-style:normal}.news-item .text p{font-size:var(--font-size-m)}",""]),t.exports=e},551:function(t,e,n){"use strict";n.r(e);var r={props:{newsItem:{default:null,type:Object}}},o=(n(497),n(499),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"news-item shadow tile",attrs:{to:t.localePath("/news/"+t.newsItem.slug)}},[t.newsItem.headerImage?n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.newsItem.headerImage,alt:t.newsItem.title}}):t._e(),t._v(" "),n("div",{staticClass:"text"},[n("h2",[t._v(t._s(t.newsItem.title))]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(t.newsItem.shortDescription))])])])}),[],!1,null,"9e118034",null);e.default=component.exports},560:function(t,e,n){"use strict";n.r(e);var r={name:"NewsList",props:{newsItems:{type:Array,default:function(){return[]},required:!0},headline:{default:null,type:String},subheadline:{default:null,type:String},button:{default:!1,type:Boolean}},methods:{beforeLeave:function(t){t.style.width=t.offsetWidth+"px",t.style.top=t.offsetTop+"px",t.style.left=t.offsetLeft+"px"}}},o=(n(495),n(12)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-headline",{staticClass:"headline center",attrs:{subheadline:t.subheadline,headline:t.headline,color:"pink"}}),t._v(" "),n("div",{staticClass:"news-list"},[n("transition-group",{staticClass:"news-list-wrapper",attrs:{name:"filter-transition",tag:"div"},on:{"before-leave":t.beforeLeave}},t._l(t.newsItems,(function(t,e){return n("v-news-item",{key:t.title+"_"+e,staticClass:"news-list-item",attrs:{"news-item":t}})})),1)],1),t._v(" "),t.button?n("v-button",{staticClass:"center list-button",attrs:{url:"/news",color:"pink",title:t.$t("button.news")}}):t._e()],1)}),[],!1,null,"46947b24",null);e.default=component.exports;installComponents(component,{VHeadline:n(413).default,VNewsItem:n(551).default,VButton:n(414).default})}}]);