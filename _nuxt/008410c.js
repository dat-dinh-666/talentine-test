(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{544:function(t,e,n){var content=n(685);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("86bde40a",content,!0,{sourceMap:!1})},545:function(t,e,n){var content=n(687);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("adcd6130",content,!0,{sourceMap:!1})},684:function(t,e,n){"use strict";var o=n(544);n.n(o).a},685:function(t,e,n){(e=n(16)(!1)).push([t.i,".testimonials[data-v-6adaa60f]{margin:var(--space-v-xxl) 0}.testimonial-items[data-v-6adaa60f]{display:grid;grid-gap:1rem;gap:1rem}@media (min-width:1200px){.testimonial-items[data-v-6adaa60f]{grid-template-columns:repeat(2,1fr)}}",""]),t.exports=e},686:function(t,e,n){"use strict";var o=n(545);n.n(o).a},687:function(t,e,n){(e=n(16)(!1)).push([t.i,".testimonial-item[data-v-03179be3]{display:grid;grid-gap:1rem;gap:1rem}.testimonial-item .content[data-v-03179be3]{display:flex;justify-content:space-between;flex-direction:column;padding:1rem}.testimonial-item .content .attribution[data-v-03179be3]{color:var(--color-pink);font-weight:700}.testimonial-item .content .quote[data-v-03179be3]{color:var(--color-grey-light)}.testimonial-item .content .quote-text[data-v-03179be3]:after,.testimonial-item .content .quote-text[data-v-03179be3]:before{content:'\"'}.testimonial-item .content p[data-v-03179be3]{font-size:var(--font-size-m)}.testimonial-item .image img[data-v-03179be3]{border-radius:var(--border-radius-l) var(--border-radius-l) 0 0;width:100%}@media (min-width:600px){.testimonial-item[data-v-03179be3]{grid-template-columns:16rem 1fr}.testimonial-item .image img[data-v-03179be3]{border-radius:var(--border-radius-l) 0 0 var(--border-radius-l);height:100%;min-height:20rem;-o-object-fit:cover;object-fit:cover;width:16rem}}",""]),t.exports=e},703:function(t,e,n){"use strict";n.r(e);var o={props:{name:{default:null,type:String,required:!0},quote:{default:null,type:String,required:!0},position:{default:null,type:String},company:{default:null,type:String,required:!0},image:{default:null,type:String,required:!0}}},r=(n(686),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"testimonial-item shadow tile"},[n("div",{staticClass:"image"},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.image,alt:t.name}})]),t._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"quote"},[n("span",{staticClass:"quote-text",domProps:{innerHTML:t._s(t.quote)}})]),t._v(" "),n("p",{staticClass:"attribution"},[t._v("\n      "+t._s(t.name)),n("br"),t._v("\n      "+t._s(t.company)),t.position?n("span",[t._v(", "+t._s(t.position))]):t._e()])])])}),[],!1,null,"03179be3",null);e.default=component.exports},732:function(t,e,n){"use strict";n.r(e);var o={props:{items:{default:null,type:Array,required:!0},headline:{default:null,type:String},subheadline:{default:null,type:String}}},r=(n(684),n(12)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"testimonials"},[e("v-headline",{staticClass:"headline center",attrs:{subheadline:this.subheadline,headline:this.headline,color:"pink"}}),this._v(" "),e("div",{staticClass:"testimonial-items"},this._l(this.items,(function(t){return e("v-testimonial-item",{key:t.name,attrs:{name:t.name,quote:t.quote,position:t.position,company:t.company,image:t.image}})})),1)],1)}),[],!1,null,"6adaa60f",null);e.default=component.exports;installComponents(component,{VHeadline:n(413).default,VTestimonialItem:n(703).default})}}]);