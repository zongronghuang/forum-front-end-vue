(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ec8"],{"25d3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoading?a("Spinner"):a("div",{staticClass:"container py-5"},[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(t._s(t.restaurant.Category.name))])]),a("hr"),a("ul",[a("li",[t._v("評論數： "+t._s(t.restaurant.Comments.length))]),a("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts))])]),a("a",{attrs:{href:"#"},on:{click:function(e){return t.$router.back()}}},[t._v("回上一頁")])])},n=[],s=(a("96cf"),a("1da1")),i=a("c4c3"),u=a("2fa3"),c=a("2375"),o={name:"RestaurantDashboard",components:{Spinner:c["a"]},data:function(){return{restaurant:{},isLoading:!0}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate:function(t,e,a){var r=t.params.id;this.fetchRestaurant(r),a()},methods:{fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i["a"].getRestaurant({restaurantId:t});case 3:if(r=a.sent,n=r.data,s=r.statusText,"OK"===s){a.next=8;break}throw new Error;case 8:e.restaurant=n.restaurant,e.isLoading=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),e.isLoading=!1,console.log("error",a.t0),u["a"].fire({icon:"error",title:"無法顯示餐廳的資料"});case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()}}},d=o,l=a("2877"),f=Object(l["a"])(d,r,n,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0b2ec8.8715e7c5.js.map