(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e927098"],{"498a":function(t,e,r){"use strict";var a=r("23e7"),n=r("58a8").trim,s=r("c8d2");a({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},"52fb":function(t,e,r){"use strict";var a=r("6039"),n=r.n(a);n.a},6039:function(t,e,r){},"7c32":function(t,e,r){"use strict";var a=r("8951"),n=r.n(a);n.a},8951:function(t,e,r){},a10d:function(t,e,r){},ad68:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("h1",[t._v("餐廳描述頁")]),t.isLoading?r("Spinner"):[r("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),r("hr"),r("RestaurantComments",{attrs:{"restaurant-comments":t.restaurantComments},on:{"after-delete-comment":t.afterDeleteComment}}),r("CreateComment",{attrs:{"restaurant-id":t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})]],2)},n=[],s=(r("a4d3"),r("e01a"),r("4de4"),r("b0c0"),r("96cf"),r("1da1")),i=r("5530"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFavorite(e)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFavorite(e)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike(e)}}},[t._v(" Unlike ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLike(e)}}},[t._v(" Like ")])],1)])},c=[],u=r("2708"),d=r("2fa3"),l=r("4cce"),m={name:"RestaurantDetail",mixins:[u["a"]],props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isProcessing:!1}},watch:{initialRestaurant:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}},methods:{addFavorite:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isProcessing=!0,e.next=4,l["a"].addFavorite({restaurantId:t.restaurant.id});case 4:if(r=e.sent,a=r.data,"success"===a.status){e.next=8;break}throw new Error(a.message);case 8:t.restaurant=Object(i["a"])(Object(i["a"])({},t.restaurant),{},{isFavorited:!0}),t.isProcessing=!1,e.next=17;break;case 12:e.prev=12,e.t0=e["catch"](0),t.isProcessing=!1,console.log("error",e.t0),d["a"].fire({icon:"error",title:"無法將餐廳加入最愛，稍後再試"});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))()},deleteFavorite:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isProcessing=!0,e.next=4,l["a"].deleteFavorite({restaurantId:t.restaurant.id});case 4:if(r=e.sent,a=r.data,"success"===a.status){e.next=8;break}throw new Error(a.message);case 8:t.restaurant=Object(i["a"])(Object(i["a"])({},t.restaurant),{},{isFavorited:!1}),t.isProcessing=!1,e.next=17;break;case 12:e.prev=12,e.t0=e["catch"](0),t.isProcessing=!1,console.log("error",e.t0),d["a"].fire({icon:"error",title:"無法將餐廳移除最愛，稍後再試"});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))()},addLike:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isProcessing=!0,e.next=4,l["a"].addLike({restaurantId:t.restaurant.id});case 4:if(r=e.sent,a=r.data,"success"===a.status){e.next=8;break}throw new Error(a.message);case 8:t.restaurant=Object(i["a"])(Object(i["a"])({},t.restaurant),{},{isLiked:!0}),t.isProcessing=!1,e.next=17;break;case 12:e.prev=12,e.t0=e["catch"](0),t.isProcessing=!1,console.log("error",e.t0),d["a"].fire({icon:"error",title:"無法為餐廳按讚，稍後再試"});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))()},deleteLike:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isProcessing=!0,e.next=4,l["a"].deleteLike({restaurantId:t.restaurant.id});case 4:if(r=e.sent,a=r.data,"success"===a.status){e.next=8;break}throw new Error(a.message);case 8:t.restaurant=Object(i["a"])(Object(i["a"])({},t.restaurant),{},{isLiked:!1}),t.isProcessing=!1,e.next=17;break;case 12:e.prev=12,e.t0=e["catch"](0),t.isProcessing=!1,console.log("error",e.t0),d["a"].fire({icon:"error",title:"無法移除餐廳的讚，稍後再試"});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}},f=m,p=(r("52fb"),r("2877")),b=Object(p["a"])(f,o,c,!1,null,"ae613cc0",null),v=b.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(e){return r("div",{key:e.id},[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.handleDeleteButtonClick(e.id)}}},[t._v(" Delete ")]):t._e(),r("h3",[r("router-link",{attrs:{to:{name:"user",params:{id:e.User.id}}}},[t._v(t._s(e.User.name))])],1),r("p",[t._v(t._s(e.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),r("hr")])})),t.restaurantComments.length<1?r("div",[t._v("目前沒有評論")]):t._e()],2)},h=[],x={create:function(t){return d["b"].post("/comments",t)},delete:function(t){var e=t.commentId;return d["b"].delete("/comments/".concat(e))}},k=r("2f62"),w={mixins:[u["b"]],props:{restaurantComments:{type:Array,required:!0}},computed:Object(i["a"])({},Object(k["b"])(["currentUser"])),methods:{handleDeleteButtonClick:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,x.delete({commentId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.$emit("after-delete-comment",t),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),d["a"].fire({icon:"error",title:"無法刪除評論，稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},C=w,_=(r("c935"),Object(p["a"])(C,g,h,!1,null,"58e491fd",null)),y=_.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit(e)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("a",{attrs:{href:"#"},on:{click:function(e){return t.$router.back()}}},[t._v("回上一頁")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit"}},[t._v("Submit")])])])},j=[],R=(r("a9e3"),r("498a"),{name:"CreateComment",data:function(){return{text:""}},props:{restaurantId:{type:Number,required:!0}},computed:Object(i["a"])({},Object(k["b"])(["currentUser"])),methods:{handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.text.trim()){e.next=3;break}return e.abrupt("return",d["a"].fire({icon:"error",title:"無法送出空白評論"}));case 3:return r={text:t.text,restaurantId:t.restaurantId},e.next=6,x.create(r);case 6:if(a=e.sent,n=a.data,"success"===n.status){e.next=10;break}throw new Error(n.message);case 10:t.$emit("after-create-comment",{commentId:n.commentId,restaurantId:t.restaurantId,text:t.text}),t.text="",e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](0),console.log("error",e.t0),d["a"].fire({icon:"error",title:"無法新增評論，稍後再試"});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))()}}}),P=R,I=(r("7c32"),Object(p["a"])(P,O,j,!1,null,"76e26fa1",null)),L=I.exports,D=r("2375"),S=r("c4c3"),F={data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[],isLoading:!0}},components:{RestaurantDetail:v,RestaurantComments:y,CreateComment:L,Spinner:D["a"]},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate:function(t,e,r){var a=t.params.id;this.fetchRestaurant(a),r()},computed:Object(i["a"])({},Object(k["b"])(["currentUser"])),methods:{fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,o,c,u,l,m,f,p,b,v,g,h;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,S["a"].getRestaurant({restaurantId:t});case 3:if(a=r.sent,n=a.data,s=a.statusText,"OK"===s){r.next=8;break}throw new Error;case 8:i=n.restaurant,o=n.isFavorited,c=n.isLiked,u=i.id,l=i.name,m=i.Category,f=i.image,p=i.opening_hours,b=i.tel,v=i.address,g=i.description,h=i.Comments,e.restaurant={id:u,name:l,categoryName:m?m.name:"未分類",image:f,openingHours:p,tel:b,address:v,description:g,isFavorited:o,isLiked:c},e.restaurantComments=h,e.isLoading=!1,r.next=20;break;case 15:r.prev=15,r.t0=r["catch"](0),e.isLoading=!1,console.log("error",r.t0),d["a"].fire({icon:"error",title:"無法取得餐廳資料，稍後再試"});case 20:case"end":return r.stop()}}),r,null,[[0,15]])})))()},afterDeleteComment:function(t){this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!==t}))},afterCreateComment:function(t){var e=t.commentId,r=t.restaurantId,a=t.text;this.restaurantComments.push({id:e,RestaurantId:r,User:{id:this.currentUser.id,name:this.currentUser.name},text:a,createdAt:new Date})}}},E=F,U=Object(p["a"])(E,a,n,!1,null,null,null);e["default"]=U.exports},c8d2:function(t,e,r){var a=r("d039"),n=r("5899"),s="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||s[t]()!=s||n[t].name!==t}))}},c935:function(t,e,r){"use strict";var a=r("a10d"),n=r.n(a);n.a},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("5135"),o=r("861d"),c=r("9bf2").f,u=r("e893"),d=s.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(m,d);var f=m.prototype=d.prototype;f.constructor=m;var p=f.toString,b="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(i(l,t))return"";var r=b?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=chunk-9e927098.699cacc9.js.map