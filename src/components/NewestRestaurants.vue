<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div v-for="restaurant in newRestaurants" :key="restaurant.id">
        <h4>
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >{{ restaurant.name }}</router-link
          >
          <br />
          <small>{{ restaurant.Category.name }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr />
      </div>
    </div>

    <div v-if="newRestaurants.length < 1">目前沒有餐廳</div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins.js";

export default {
  mixins: [fromNowFilter],
  props: {
    newRestaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>