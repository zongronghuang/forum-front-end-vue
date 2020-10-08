<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">{{
        restaurant.Category.name
      }}</span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from "../utils/helpers.js";

export default {
  name: "RestaurantDashboard",
  data() {
    return {
      restaurant: {},
    };
  },
  created() {
    const restaurantId = this.$route.params.id;
    this.fetchRestaurant(restaurantId);
  },
  beforeRouteUpdate(to, from, next) {
    const restaurantId = to.params.id;
    this.fetchRestaurant(restaurantId);
    next();
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data, statusText } = await restaurantsAPI.getRestaurant({
          restaurantId,
        });

        if (statusText !== "OK") {
          throw new Error();
        }

        this.restaurant = data.restaurant;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法顯示餐廳的資料",
        });
      }
    },
  },
};
</script>