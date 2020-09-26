<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image | emptyImage" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.favoriteCount }}</span
            >
            <p class="card-text">{{ restaurant.description }}</p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
              >Show</router-link
            >

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import { emptyImageFilter } from "../utils/mixins.js";
import restaurantsAPI from "../apis/restaurants.js";
import usersAPI from "../apis/users.js";
import { Toast } from "../utils/helpers.js";

export default {
  name: "RestaurantsTop",
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const { data, statusText } = await restaurantsAPI.getTopRestaurants();

        console.log("data", data);
        if (statusText !== "OK") {
          throw new Error();
        }

        this.restaurants = data.restaurants.map((restaurant) => ({
          ...restaurant,
          favoriteCount: restaurant.FavoriteCount,
        }));
      } catch (error) {
        console.log("error", error);

        Toast.fire({
          icon: "error",
          title: "無法取得人氣餐廳資料，稍後再試",
        });
      }
    },
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: true,
              favoriteCount: restaurant.favoriteCount + 1,
            };
          }

          return restaurant;
        });
      } catch (error) {
        console.log(error);

        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，稍後再試",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: false,
              favoriteCount: restaurant.favoriteCount - 1,
            };
          }

          return restaurant;
        });
      } catch (error) {
        console.log("error", error);

        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，稍後再試",
        });
      }
    },
  },
};
</script>