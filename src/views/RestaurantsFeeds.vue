<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-6">
          <NewestRestaurants :new-restaurants="restaurants" />
        </div>

        <div class="col-6">
          <NewestComments :new-comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue";
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from "../utils/helpers.js";
import Spinner from "../components/Spinner.vue";

export default {
  name: "RestaurantsFeeds",
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantsAPI.getFeeds();
        const { restaurants, comments } = response.data;
        const { status, statusText } = response;

        if (statusText !== "OK") {
          throw new Error(`${status}: ${statusText}`);
        }

        this.restaurants = restaurants;
        this.comments = comments;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);

        Toast.fire({
          icon: "error",
          title: `發生錯誤：${error}`,
        });
      }
    },
  },
};
</script>