(function(e){function t(t){for(var i,c,r=t[0],o=t[1],l=t[2],u=0,f=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={index:0},s=[];function c(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-2bc8e75d":"a9f2d5b2","chunk-2d0a5522":"16c3bc70"}[e]+".js"}function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=a[e]=[t,i]}));t.push(n[2]=i);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.src=c(e);var l=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",l.name="ChunkLoadError",l.type=i,l.request=s,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("c31f")},"0617":function(e,t,n){"use strict";var i=n("12cb"),a=n.n(i);a.a},"0efb":function(e,t,n){"use strict";var i=n("da90"),a=n.n(i);a.a},"0fac":function(e,t,n){"use strict";var i=n("f2f2"),a=n.n(i);a.a},"12cb":function(e,t,n){},2814:function(e,t,n){},"2d1a":function(e,t,n){var i={"./qrcod2e.vue":"d585"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="2d1a"},4425:function(e,t,n){"use strict";var i=n("f412"),a=n.n(i);a.a},"4d1c":function(e,t,n){"use strict";var i=n("5b12"),a=n.n(i);a.a},5596:function(e,t,n){"use strict";var i=n("d60f"),a=n.n(i);a.a},"5b12":function(e,t,n){},"8b26":function(e,t,n){"use strict";var i=n("994e"),a=n.n(i);a.a},9224:function(e){e.exports=JSON.parse('{"name":"join-ui","version":"0.1.13","private":false,"main":"lib/join-ui.umd.min.js","author":"santiago_fan <464884785@qq.com>","scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","build:docs":"vue-cli-service build","build:entry":"node build/build-entry.js ","publish:docs":"node build/publish-docs.js","new:comp":"node build/create-comp.js && node build/build-entry.js","del:comp":"node build/delete-comp.js && node build/build-entry.js","lint":"vue-cli-service lint","lib":"vue-cli-service build --target lib --name join-ui --dest lib packages/index.js"},"dependencies":{"core-js":"^2.6.5","element-ui":"^2.13.1","qrcodejs2":"0.0.2","vue":"^2.6.10"},"devDependencies":{"@vue/cli-plugin-babel":"^3.11.0","@vue/cli-plugin-eslint":"^3.11.0","@vue/cli-service":"^3.11.0","babel-eslint":"^10.0.1","babel-plugin-import":"^1.12.2","clipboard":"^2.0.4","eslint":"^5.16.0","eslint-plugin-vue":"^5.0.0","gh-pages":"^2.1.1","highlight.js":"^9.15.10","markdown-it-container":"^2.0.0","markdown-it-decorate":"^1.2.2","markdown-it-task-checkbox":"^1.0.6","node-sass":"^4.12.0","sass-loader":"^8.0.0","uppercamelcase":"^3.0.0","vue-markdown-loader":"^2.4.1","vue-router":"^3.1.3","vue-template-compiler":"^2.6.10"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"rules":{},"parserOptions":{"parser":"babel-eslint"}},"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions"]}')},"96ac":function(e,t,n){"use strict";var i=n("2814"),a=n.n(i);a.a},"994e":function(e,t,n){},c31f:function(e,t,n){"use strict";n.r(t);n("7f7f"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("mainHeader"),n("div",{staticClass:"container"},[n("sideNav",{staticClass:"nav"}),n("router-view",{staticClass:"view"})],1),n("mainFooter")],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"page-header",style:"index"===e.$route.name?"box-shadow:none":"box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)"},[n("div",{staticClass:"header-container"},[e._m(0),n("span",[e._v(e._s(e.version))])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"https://github.com/SantiagoFan/join-ui",target:"__blank"}},[n("span",{staticClass:"name"},[e._v("MDS Vue 组件库")])])}],o=n("9224"),l={data:function(){return{version:o.version}}},u=l,d=(n("0617"),n("2877")),f=Object(d["a"])(u,c,r,!1,null,null,null),p=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-footer"},[n("a",{staticClass:"page-footer__github-link",attrs:{href:"https://github.com/SantiagoFan/join-ui",target:"_blank"}},[n("svg",{staticClass:"octicon octicon-mark-github",attrs:{height:"28",width:"28",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])])},v=[],m=(n("fca7"),{}),b=Object(d["a"])(m,h,v,!1,null,"1788903f",null),g=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"side-nav"},e._l(Object.keys(e.data),(function(t){return n("div",{key:t,staticClass:"group-container"},[n("p",{staticClass:"side-nav-title"},[e._v(e._s(t))]),e._l(e.data[t],(function(t){return n("div",{key:t.name,staticClass:"side-nav-items"},[t.desc?[t.name?n("router-link",{class:e.$route.name===t.name?"active":"",attrs:{to:{name:t.name}}},[e._v(e._s(t.desc))]):n("p",{staticClass:"side-nav-group"},[e._v(e._s(t.desc))]),e._l(t.items,(function(t){return n("div",{key:t.name},[n("router-link",{staticClass:"slid-nav-component",class:e.$route.name===t.name?"active":"",attrs:{to:{name:t.name}}},[n("span",{staticClass:"en-name"},[e._v(e._s(t.desc))])])],1)}))]:e._e()],2)}))],2)})),0)},y=[],k=n("ee95"),C={data:function(){return{data:k}}},S=C,w=(n("5596"),Object(d["a"])(S,_,y,!1,null,null,null)),x=w.exports,j=n("b311"),O=n.n(j),P={name:"app",components:{mainHeader:p,sideNav:x,mainFooter:g},mounted:function(){var e=new O.a(".code-copy",{text:function(e){return e.previousSibling.innerText}});e.on("success",(function(e){e.trigger.innerHTML="已复制"}))}},E=P,$=(n("4d1c"),Object(d["a"])(E,a,s,!1,null,null,null)),T=$.exports,V=(n("456d"),n("8c4f"));i["default"].use(V["a"]);var q=[];Object.keys(k).forEach((function(e){q=q.concat(k[e])}));var N=function e(t){t.forEach((function(t){t.items?(e(t.items),q=q.concat(t.items)):"site-index"===t.name?t.component=function(e){return n.e("chunk-2d0a5522").then(function(){return e(n("09cf"))}.bind(null,n)).catch(n.oe)}:t.component=function(e){return n.e("chunk-2bc8e75d").then(function(){return e(n("62cd")("./".concat(t.name,".md")))}.bind(null,n)).catch(n.oe)}}))};N(q);var L=q.filter((function(e){return e.path})),U=new V["a"]({routes:L}),B=n("5c96"),D=n.n(B),z=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docs-demo-wrapper"},[n("div",{staticClass:"demo-container",style:{height:e.isExpand?"auto":"0"}},[n("div",{attrs:{span:"14"}},[n("div",{staticClass:"docs-demo docs-demo--expand"},[n("div",{staticClass:"highlight-wrapper"},[e._t("highlight")],2),n("div",{staticClass:"code-copy"},[e._v("复制代码")])])])]),n("span",{staticClass:"docs-trans docs-demo__triangle",on:{click:e.toggle}},[e._v(e._s(e.isExpand?"隐藏代码":"显示代码"))])])}),A=[],F={data:function(){return{isExpand:!1}},methods:{toggle:function(){this.isExpand=!this.isExpand}}},M=F,G=(n("96ac"),Object(d["a"])(M,z,A,!1,null,null,null)),J=G.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jui-fileGroup"},[e._v("\n\n  fileGroup\n\n")])},K=[],I={name:"jui-fileGroup",data:function(){return{}},props:{},methods:{}},Q=I,R=(n("0fac"),Object(d["a"])(Q,H,K,!1,null,null,null)),W=R.exports;W.install=function(e){e.component(W.name,W)};var X=W;"undefined"!==typeof window&&window.Vue&&window.Vue.component(W.name,W);var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jui-sku-container"},[n("div",{staticClass:"specification"},[n("ul",{staticClass:"spec-list"},[e._l(e.value,(function(t,i){return n("li",{key:i,staticClass:"item"},[n("div",{staticClass:"name"},[n("el-input",{attrs:{size:"small",placeholder:"输入产品规格名称"},model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"item.name"}}),n("i",{staticClass:"icon el-icon-circle-close",on:{click:function(t){return e.delSpec(i)}}})],1),n("div",{staticClass:"values"},[e._l(t.value,(function(t,a){return n("span",{key:t,staticClass:"el-tag"},[n("span",{staticClass:"el-select__tags-text"},[e._v(e._s(t))]),n("i",{staticClass:"el-tag__close el-icon-close",on:{click:function(t){return e.delSpecTag(i,a)}}})])})),n("div",{staticClass:"add-attr"},[n("el-input",{attrs:{size:"small",placeholder:"多个产品属性以空格隔开",icon:"plus"},on:{click:function(t){return e.addSpecTag(i)}},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addSpecTag(i)}},model:{value:e.addValues[i],callback:function(t){e.$set(e.addValues,i,t)},expression:"addValues[index]"}})],1)],2)])})),n("li",{staticClass:"item"},[n("div",{staticClass:"add-spec"},[n("el-button",{attrs:{plain:"",size:"small",type:"info",disabled:e.value.length>=5},on:{click:e.addSpec}},[e._v("添加规格项目")])],1)])],2)]),e.isShowCode?n("div",{staticClass:"example"},[n("textarea",{staticClass:"code-area",domProps:{value:JSON.stringify(e.value)}})]):e._e()])},Z=[],ee=(n("4f7f"),n("5df3"),n("1c4c"),n("28a5"),{name:"SkuSpec",props:{isShowCode:{type:Boolean,default:!1},value:{type:Array,default:function(){return[]}}},data:function(){return{addValues:[]}},watch:{value:{handler:function(){this.$emit("update:model",this.value)},deep:!0}},methods:{addSpec:function(){this.value.length<5&&this.value.push({name:"",value:[]})},delSpec:function(e){this.value.splice(e,1)},addSpecTag:function(e){var t=this.addValues[e]||"";if(t.trim()){t=t.trim();var n=t.split(/\s+/),i=this.value[e].value.concat(n);i=Array.from(new Set(i)),this.$set(this.value[e],"value",i),this.clearAddValues(e)}},delSpecTag:function(e,t){this.value[e].value.splice(t,1)},clearAddValues:function(e){this.$set(this.addValues,e,"")}}}),te=ee,ne=(n("4425"),Object(d["a"])(te,Y,Z,!1,null,null,null)),ie=ne.exports;ie.install=function(e){e.component(ie.name,ie)};var ae=ie,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jui-sku-container"},[n("div",{staticClass:"example"},[n("table",{staticClass:"stock-table el-table el-table--border",attrs:{cellspacing:"0",cellpadding:"0"}},[n("thead",[n("tr",[e._l(e.specification,(function(t,i){return n("th",{key:i},[e._v("\n            "+e._s(t.name)+"\n          ")])})),n("th",{staticStyle:{width:"160px"}},[e._v("销售价（元）")]),n("th",{staticStyle:{width:"160px"}},[e._v("库存")]),n("th",{staticStyle:{width:"160px"}},[e._v("规格编码")]),n("th",{staticStyle:{width:"160px"}},[e._v("成本价（元）")]),n("th",{staticStyle:{width:"100px"}},[e._v("是否启用")])],2)]),e.value.length>0?n("tbody",[e._l(e.value,(function(t,i){return n("tr",{key:t.ProductSpec},[e._l(e.specification,(function(t,a){return[e.showTd(a,i)?n("td",{key:a,attrs:{rowspan:e.countSum(a+1)}},[e._v("\n              "+e._s(e.getSpecValue(a,i))+"\n            ")]):e._e()]})),n("td",[n("el-input-number",{attrs:{size:"small",min:0,precision:2,placeholder:"输入销售价",disabled:!t.isUse},model:{value:t.ProductPrice,callback:function(n){e.$set(t,"ProductPrice",e._n(n))},expression:"item.ProductPrice"}})],1),n("td",[n("el-input-number",{attrs:{size:"small",min:0,controls:!1,precision:0,placeholder:"输入库存",disabled:!t.isUse},model:{value:t.ProductStock,callback:function(n){e.$set(t,"ProductStock",e._n(n))},expression:"item.ProductStock"}})],1),n("td",[n("el-input",{attrs:{size:"small",type:"text",disabled:!t.isUse,placeholder:"输入商品规格编号"},model:{value:t.ProductNo,callback:function(n){e.$set(t,"ProductNo",n)},expression:"item.ProductNo"}})],1),n("td",[n("el-input-number",{attrs:{size:"small",min:0,precision:2,disabled:!t.isUse},model:{value:t.ProductCost,callback:function(n){e.$set(t,"ProductCost",e._n(n))},expression:"item.ProductCost"}})],1),n("td",[n("el-switch",{model:{value:t.isUse,callback:function(n){e.$set(t,"isUse",n)},expression:"item.isUse"}})],1)],2)})),n("tr",[n("td",{staticClass:"wh-foot",attrs:{colspan:"8"}},[n("span",{staticClass:"label"},[e._v("批量设置：")]),e.isSetListShow?n("ul",{staticClass:"set-list"},[n("li",{staticClass:"set-item",on:{click:function(t){return e.openBatch("ProductPrice")}}},[e._v("销售价")]),n("li",{staticClass:"set-item",on:{click:function(t){return e.openBatch("ProductStock")}}},[e._v("库存")]),n("li",{staticClass:"set-item",on:{click:function(t){return e.openBatch("ProductCost")}}},[e._v("成本价")])]):n("div",{staticClass:"set-form"},[n("el-input-number",{attrs:{controls:!1,size:"mini",min:0,precision:"ProductStock"==e.currentType?0:2,placeholder:"输入要设置的数量"},model:{value:e.batchValue,callback:function(t){e.batchValue=e._n(t)},expression:"batchValue"}}),n("i",{staticClass:"set-btn blue el-icon-check",on:{click:e.setBatch}}),n("i",{staticClass:"set-btn red el-icon-close",on:{click:e.cancelBatch}})],1)])])],2):e._e()])]),e.isShowCode?n("div",{staticClass:"example"},[n("textarea",{staticClass:"code-area",domProps:{value:JSON.stringify(e.value)}})]):e._e()])},ce=[];n("6b54");function re(e){return Array.prototype.reduce.call(e,(function(e,t){var n=[];return e.forEach((function(e){t.forEach((function(t){n.push(e.concat([t]))}))})),n}),[[]])}var oe={name:"SkuTable",props:{isShowCode:{type:Boolean,default:!1},specification:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}}},data:function(){return{defaultSkuNo:"PRONO_",isSetListShow:!0,batchValue:"",currentType:""}},watch:{specification:{handler:function(){this.bulidSKUS()},deep:!0,immediate:!0}},methods:{bulidSKUS:function(){var e,t=this,n=[];this.specification.forEach((function(e){e.value.length>0&&n.push(e.value)}));var i=re(n),a=[];i.forEach((function(e){if(0!==e.length){var n=t.getOldOrCreatData(JSON.stringify(e));a.push(n)}})),this.value.length=0,(e=this.value).push.apply(e,a),this.$emit("update:value",a)},getOldOrCreatData:function(e){var t={ProductCost:1,ProductId:0,ProductNo:1,ProductPrice:1,ProductSpec:e,ProductStock:999,isUse:!0};return this.value.forEach((function(n){n.ProductSpec===e&&(t=n)})),t},getSpecValue:function(e,t){var n,i=this.specification[e].value;n=this.specification[e+1]&&this.specification[e+1].value.length?t/this.countSum(e+1):t;var a=Math.floor(n%i.length);return"NaN"!==a.toString()?i[a]:""},countSum:function(e){var t=1;return this.specification.forEach((function(n,i){i>=e&&n.value.length&&(t*=n.value.length)})),t},showTd:function(e,t){return!!this.specification[e]&&t%this.countSum(e+1)===0},openBatch:function(e){this.currentType=e,this.isSetListShow=!1},setBatch:function(){var e=this;"string"!==typeof this.batchValue?(this.value.forEach((function(t){t.isUse&&(t[e.currentType]=e.batchValue)})),this.cancelBatch()):this.$message({type:"warning",message:"请输入正确的值"})},cancelBatch:function(){this.batchValue="",this.currentType="",this.isSetListShow=!0}}},le=oe,ue=(n("8b26"),Object(d["a"])(le,se,ce,!1,null,null,null)),de=ue.exports;de.install=function(e){e.component(de.name,de)};var fe=de,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"qrCodeDiv",staticClass:"qrcode-container",attrs:{id:"qrcode"}})])},he=[],ve=(n("c5f6"),n("d044")),me=n.n(ve),be={name:"qrcode",props:{text:{type:String,default:" "},width:{type:Number,default:132},height:{type:Number,default:132},colorDark:{type:String,default:"#000"},colorLight:{type:String,default:"#fff"}},data:function(){return{qrcode:null}},watch:{text:{handler:function(){this.build()}}},mounted:function(){this.$nextTick((function(){this.qrcode=new me.a(this.$refs.qrCodeDiv,{width:this.width,height:this.height,text:this.text,colorDark:this.colorDark,colorLight:this.colorLight,correctLevel:me.a.CorrectLevel.L})}))},methods:{build:function(){this.qrcode&&this.qrcode.makeCode(this.text)}}},ge=be,_e=(n("0efb"),Object(d["a"])(ge,pe,he,!1,null,"706453c0",null)),ye=_e.exports;ye.install=function(e){e.component(ye.name,ye)};var ke=ye,Ce="0.1.13",Se=[X,ae,fe,ke],we=function e(t){e.installed||Se.forEach((function(e){t.use(e)}))};"undefined"!==typeof window&&window.Vue&&we(window.Vue);var xe={install:we,version:Ce,FileGroup:X,SkuSpec:ae,SkuTable:fe,Qrcode:ke},je=[];function Oe(e){e.keys().forEach((function(t){je.push(e(t).default)}))}Oe(n("2d1a")),je.map((function(e){return i["default"].component(e.name,e)})),i["default"].component("demo-block",J),i["default"].use(D.a),i["default"].use(xe),i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(T)},router:U}).$mount("#app")},cdbd:function(e,t,n){},d585:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-block"},[e._v("\n  qrcode demo 内部内容\n    "),n("qrcode")],1)},a=[],s={name:"qrcode-demo"},c=s,r=n("2877"),o=Object(r["a"])(c,i,a,!1,null,null,null);t["default"]=o.exports},d60f:function(e,t,n){},da90:function(e,t,n){},ee95:function(e){e.exports=JSON.parse('{"开发指南":[{"name":"site-index","path":"/"},{"name":"introduce","path":"/introduce","desc":"介绍"},{"name":"start","path":"/start","desc":"快速上手"},{"name":"contribute","path":"/contribute","desc":"开发指南"},{"name":"plan","path":"/plan","desc":"开发计划"},{"name":"index","path":"/index","type":"pages"}],"组件":[{"desc":"基础组件","items":[]},{"desc":"拓展组件","items":[{"desc":"二维码","name":"qrcode","path":"/qrcode"},{"desc":"SKU 商品规格","name":"sku","path":"/sku"},{"desc":"FileGroup","name":"FileGroup","path":"/FileGroup"}]}]}')},f2f2:function(e,t,n){},f412:function(e,t,n){},fca7:function(e,t,n){"use strict";var i=n("cdbd"),a=n.n(i);a.a}});
//# sourceMappingURL=index.223bcc57.js.map