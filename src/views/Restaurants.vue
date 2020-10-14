<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">首頁 - 餐廳列表</h1>

    <RestaurantsNavPills :categories="categories" />

    <Spinner v-if="isLoading" />

    <template v-else>
      <div class="row">
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <RestaurantsPagination
        v-if="totalPage.length > 1"
        :current-page="currentPage"
        :total-page="totalPage"
        :category-id="categoryId"
        :previous-page="prev"
        :next-page="next"
      />
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";
import Spinner from "../components/Spinner.vue";
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from "../utils/helpers.js";

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner,
  },
  data() {
    return {
      categories: [],
      categoryId: -1,
      currentPage: 1,
      restaurants: [],
      totalPage: [],
      prev: -1,
      next: -1,
      isLoading: true,
    };
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({
      queryPage: page,
      queryCategoryId: categoryId,
    });
  },
  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    next();
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

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;

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