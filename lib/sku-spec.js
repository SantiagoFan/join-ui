module.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=5)}({0:function(e,t,n){"use strict";function a(e,t,n,a,s,i,l,r){var o,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),l?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},c._ssrRegister=o):s&&(o=r?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(e,t){return o.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,o):[o]}return{exports:e,options:c}}n.d(t,"a",(function(){return a}))},5:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jui-sku-container"},[n("div",{staticClass:"specification"},[n("ul",{staticClass:"spec-list"},[e._l(e.value,(function(t,a){return n("li",{key:a,staticClass:"item"},[n("div",{staticClass:"name"},[n("el-input",{attrs:{size:"small",placeholder:"输入产品规格名称"},model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"item.name"}}),n("i",{staticClass:"icon el-icon-circle-close",on:{click:function(t){return e.delSpec(a)}}})],1),n("div",{staticClass:"values"},[e._l(t.value,(function(t,s){return n("span",{key:t,staticClass:"el-tag"},[n("span",{staticClass:"el-select__tags-text"},[e._v(e._s(t))]),n("i",{staticClass:"el-tag__close el-icon-close",on:{click:function(t){return e.delSpecTag(a,s)}}})])})),n("div",{staticClass:"add-attr"},[n("el-input",{attrs:{size:"small",placeholder:"多个产品属性以空格隔开",icon:"plus"},on:{click:function(t){return e.addSpecTag(a)}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addSpecTag(a)}},model:{value:e.addValues[a],callback:function(t){e.$set(e.addValues,a,t)},expression:"addValues[index]"}})],1)],2)])})),n("li",{staticClass:"item"},[n("div",{staticClass:"add-spec"},[n("el-button",{attrs:{plain:"",size:"small",type:"info",disabled:e.value.length>=5},on:{click:e.addSpec}},[e._v("添加规格项目")])],1)])],2)]),e.isShowCode?n("div",{staticClass:"example"},[n("textarea",{staticClass:"code-area",domProps:{value:JSON.stringify(e.value)}})]):e._e()])};a._withStripped=!0;var s={name:"JSkuSpec",props:{isShowCode:{type:Boolean,default:!1},value:{type:Array,default:function(){return[]}}},data:()=>({addValues:[]}),watch:{value:{handler:function(){this.$emit("update:model",this.value)},deep:!0}},methods:{addSpec(){this.value.length<5&&this.value.push({name:"",value:[]})},delSpec(e){this.value.splice(e,1)},addSpecTag(e){let t=this.addValues[e]||"";if(!t.trim())return;t=t.trim();const n=t.split(/\s+/);let a=this.value[e].value.concat(n);a=Array.from(new Set(a)),this.$set(this.value[e],"value",a),this.clearAddValues(e)},delSpecTag(e,t){this.value[e].value.splice(t,1)},clearAddValues(e){this.$set(this.addValues,e,"")}}},i=n(0),l=Object(i.a)(s,a,[],!1,null,null,null);l.options.__file="packages/sku-spec/SkuSpec.vue";var r=l.exports;r.install=function(e){e.component(r.name,r)};t.default=r}});