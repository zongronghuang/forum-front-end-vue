(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d4acebf"],{"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3");var n=r("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},3835:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}r.d(e,"a",(function(){return s}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)if(r.push(o.value),e&&r.length===e)break}catch(c){a=!0,i=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(a)throw i}}return r}}var i=r("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return n(t)||a(t,e)||Object(i["a"])(t,e)||o()}},"498a":function(t,e,r){"use strict";var n=r("23e7"),a=r("58a8").trim,i=r("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:a})},b85c:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");var n=r("06c5");function a(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=Object(n["a"])(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==r["return"]||r["return"]()}finally{if(c)throw o}}}}},c8d2:function(t,e,r){var n=r("d039"),a=r("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!a[t]()||i[t]()!=i||a[t].name!==t}))}},d28b:function(t,e,r){var n=r("746f");n("iterator")},da5c:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[t._v("Image")]),r("div",{staticClass:"mb-3"},[t.user.image?r("img",{attrs:{src:t._f("emptyImage")(t.user.image),width:"300"}}):t._e()]),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"處理中":"Submit")+" ")])])])},a=[],i=(r("b0c0"),r("a9e3"),r("d3b7"),r("3ca3"),r("498a"),r("ddb0"),r("2b3d"),r("3835")),o=r("b85c"),s=(r("96cf"),r("1da1")),c=r("5530"),u=r("2708"),f=r("2f62"),l=r("4cce"),d=r("2fa3"),m={name:"user-edit",mixins:[u["a"]],data:function(){return{user:{},isProcessing:!1}},created:function(){var t=this.$route.params.id;if(Number(t)!==Number(this.currentUser.id))return this.$router.push({name:"not-found"});this.setUser()},beforeRouteUpdate:function(t,e,r){var n=t.params.id;if(Number(n)!==Number(this.currentUser.id))return this.$router.push({name:"not-found"});this.setUser(),r()},computed:Object(c["a"])({},Object(f["b"])(["currentUser"])),watch:{currentUser:function(t){this.setUser(),console.log(t)}},methods:{setUser:function(){this.user=Object(c["a"])({},this.currentUser)},handleFileChange:function(t){var e=t.target.files;if(0===e.length)this.user.image="";else{var r=window.URL.createObjectURL(e[0]);this.user.image=r}},handleSubmit:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a,s,c,u,f,m,b,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,e.isProcessing=!0,e.user.name.trim()){r.next=5;break}return e.isProcessing=!1,r.abrupt("return",d["a"].fire({icon:"error",title:"名稱不可為空白"}));case 5:return n=t.target,a=new FormData(n),r.next=9,l["a"].update({userId:e.currentUser.id,formData:a});case 9:if(s=r.sent,c=s.data,console.log("update data",c),"success"===c.status){r.next=14;break}throw new Error(c.message);case 14:e.$router.push({name:"user",params:{id:e.currentUser.id}}),u=Object(o["a"])(a.entries());try{for(u.s();!(f=u.n()).done;)m=Object(i["a"])(f.value,2),b=m[0],p=m[1],console.log(b+": "+p)}catch(v){u.e(v)}finally{u.f()}r.next=24;break;case 19:r.prev=19,r.t0=r["catch"](0),e.isProcessing=!1,console.log("error",r.t0),d["a"].fire({icon:"error",title:"無法更新使用者資料"});case 24:case"end":return r.stop()}}),r,null,[[0,19]])})))()}}},b=m,p=r("2877"),v=Object(p["a"])(b,n,a,!1,null,null,null);e["default"]=v.exports},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),o=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),f=i.Symbol;if(a&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var m=d.prototype=f.prototype;m.constructor=d;var b=m.toString,p="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=b.call(t);if(o(l,t))return"";var r=p?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),o=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=r("ae40"),m=l("slice"),b=d("slice",{ACCESSORS:!0,0:0,1:2}),p=f("species"),v=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!m||!b},{slice:function(t,e){var r,n,f,l=c(this),d=s(l.length),m=o(t,d),b=o(void 0===e?d:e,d);if(i(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(l,m,b);for(n=new(void 0===r?Array:r)(h(b-m,0)),f=0;m<b;m++,f++)m in l&&u(n,f,l[m]);return n.length=f,n}})}}]);
//# sourceMappingURL=chunk-4d4acebf.f48f38d3.js.map