(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be2cb5d8"],{be6c:function(t,e,a){"use strict";a("b0c0");var n=a("2fa3");e["a"]={categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){var e=t.name;return n["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,a=t.name;return n["b"].put("/admin/categories/".concat(e),{name:a})},delete:function(t){var e=t.categoryId;return n["b"].delete("/admin/categories/".concat(e))}},restaurants:{create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},get:function(){return n["b"].get("/admin/restaurants")},delete:function(t){var e=t.restaurantId;return n["b"].delete("/admin/restaurants/".concat(e))},getDetail:function(t){var e=t.restaurantId;return n["b"].get("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,a=t.formData;return n["b"].put("/admin/restaurants/".concat(e),a)}},users:{get:function(){return n["b"].get("/admin/users")},update:function(t){var e=t.userId,a=t.isAdmin;return n["b"].put("/admin/users/".concat(e),{isAdmin:a})}}}},f91c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[t.isLoading?a("Spinner"):a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(t._s(t.restaurant.categoryName))])]),a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),a("div",{staticClass:"well"},[a("ul",{staticClass:"list-unstyled"},[a("li",[a("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),a("li",[a("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),a("li",[a("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),a("div",{staticClass:"col-md-8"},[a("p",[t._v(t._s(t.restaurant.description))])])]),a("hr"),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])],1)},r=[],s=(a("b0c0"),a("5530")),i=(a("96cf"),a("1da1")),c=a("2708"),u=a("be6c"),o=a("2fa3"),d=a("2375"),l={name:"AdminRestaurant",mixins:[c["a"]],components:{Spinner:d["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:""},isLoading:!0}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate:function(t,e,a){var n=t.params.id;this.fetchRestaurant(n),a()},methods:{fetchRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u["a"].restaurants.getDetail({restaurantId:t});case 3:n=a.sent,r=n.data,e.restaurant=Object(s["a"])(Object(s["a"])({},r.restaurant),{},{openingHours:r.restaurant.opening_hours,categoryName:r.restaurant.Category.name}),e.isLoading=!1,a.next=14;break;case 9:a.prev=9,a.t0=a["catch"](0),e.isLoading=!1,console.log("error",a.t0),o["a"].fire({icon:"error",title:"無法取得指定餐廳的資料，稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,9]])})))()}}},m=l,g=a("2877"),p=Object(g["a"])(m,n,r,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-be2cb5d8.5b09f625.js.map