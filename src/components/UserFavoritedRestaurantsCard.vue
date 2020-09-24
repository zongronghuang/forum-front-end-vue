<template>
  <div class="card">
    <div class="card-header">
      <strong>{{favorites.length}}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        :to=" {name: 'restaurant', params: {id: favorite.id}}"
        v-for="favorite in favorites"
        :key="favorite.id"
      >
        <img :src="favorite.image | emptyImage" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins.js";

export default {
  name: "UserFavoritedRestaurantsCard",
  mixins: [emptyImageFilter],
  props: {
    userFavorites: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      favorites: [],
    };
  },
  created() {
    this.fetchFavorites();
  },
  methods: {
    fetchFavorites() {
      this.favorites = [...this.userFavorites];
    },
  },
};
</script>