<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-6">
        <NewestRestaurants :restaurants="restaurants" />
      </div>

      <div class="col-6">
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue";
import restaurantsAPI from "../apis/restaurants.js";

export default {
  name: "RestaurantsFeeds",
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantsAPI.getNewRestaurants();
        console.log("response", response);
        const { restaurants, comments } = response.data;

        this.restaurants = restaurants;
        this.comments = comments;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
};
</script>