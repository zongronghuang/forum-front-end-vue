<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image | emptyImage"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }"
        >Dashboard</router-link
      >

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        v-if="restaurant.isFavorited"
        :disabled="isProcessing"
        @click.stop.prevent="deleteFavorite"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        v-else
        :disabled="isProcessing"
        @click.stop.prevent="addFavorite"
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        v-if="restaurant.isLiked"
        :disabled="isProcessing"
        @click.stop.prevent="deleteLike"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        v-else
        :disabled="isProcessing"
        @click.stop.prevent="addLike"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins.js";
import { Toast } from "../utils/helpers.js";
import usersAPI from "../apis/users.js";

export default {
  name: "RestaurantDetail",
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
      isProcessing: false,
    };
  },
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
    },
  },
  methods: {
    async addFavorite() {
      try {
        this.isProcessing = true;

        const { data } = await usersAPI.addFavorite({
          restaurantId: this.restaurant.id,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };

        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;

        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，稍後再試",
        });
      }
    },
    async deleteFavorite() {
      try {
        this.isProcessing = true;

        const { data } = await usersAPI.deleteFavorite({
          restaurantId: this.restaurant.id,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };

        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;

        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，稍後再試",
        });
      }
    },
    async addLike() {
      try {
        this.isProcessing = true;

        const { data } = await usersAPI.addLike({
          restaurantId: this.restaurant.id,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };

        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;

        console.log("error", error);

        Toast.fire({
          icon: "error",
          title: "無法為餐廳按讚，稍後再試",
        });
      }
    },
    async deleteLike() {
      try {
        this.isProcessing = true;

        const { data } = await usersAPI.deleteLike({
          restaurantId: this.restaurant.id,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };

        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;

        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法移除餐廳的讚，稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>