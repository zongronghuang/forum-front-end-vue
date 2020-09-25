<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body">
      <div v-for="comment in newComments" :key="comment.id">
        <h4>
          <router-link
            :to="{ name: 'restaurant', params: { id: comment.Restaurant.id } }"
            >{{ comment.RestaurantId }}</router-link
          >
        </h4>
        <p>{{ comment.text }}</p>
        by
        <router-link :to="{ name: 'user', params: { id: comment.UserId } }">{{
          comment.UserId
        }}</router-link>
        {{ comment.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins.js";

export default {
  name: "NewestComments",
  mixins: [fromNowFilter],
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  created() {
    console.log("first comment", this.comments[0]);
  },
};
</script>

