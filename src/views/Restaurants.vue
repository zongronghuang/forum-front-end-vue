<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">首頁 - 餐廳列表</h1>
    <RestaurantsNavPills :categories="categories" />
    <RestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
    <RestaurantsPagination
      v-if="totalPage > 1"
      :currentPage="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from "../utils/helpers.js";

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: -1,
      prev: -1,
      next: -1,
    };
  },
  created() {
    this.fetchRestaurants({
      page: 1,
      categoryId: "",
    });
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          next,
          prev,
        } = response.data;

        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.restaurants = restaurants;
        this.totalPage = totalPage;
        this.prev = prev;
        this.next = next;

        console.log("response", response);
      } catch (error) {
        console.log("error", error);

        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
};
</script>