<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body">
      <div v-for="comment in filteredComments" :key="comment.id">
        <h4>
          <router-link
            :to="{ name: 'restaurant', params: { id: comment.Restaurant.id } }"
            >{{ comment.Restaurant.name }}</router-link
          >
        </h4>
        <p>{{ comment.text }}</p>
        by
        <router-link :to="{ name: 'user', params: { id: comment.User.id } }">{{
          comment.User.name
        }}</router-link>
        {{ comment.createdAt | fromNow }}
        <hr />
      </div>
    </div>

    <div v-if="filteredComments.length < 1">目前沒有評論</div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins.js";

export default {
  name: "NewestComments",
  mixins: [fromNowFilter],
  props: {
    newComments: {
      type: Array,
      required: true,
    },
  },
  computed: {
    filteredComments: function () {
      return this.newComments.filter((comment) => {
        if (comment.text && comment.Restaurant) {
          return comment;
        }
      });
    },
  },
};
</script>

