<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">{{
          restaurant.categoryName
        }}</span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px; margin-bottom: 25px"
        />
        <div class="well">
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
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr />
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins.js";
import adminAPI from "../apis/admin.js";
import { Toast } from "../utils/helpers.js";

export default {
  name: "AdminRestaurant",
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
      },
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.get();
        console.log("data ", data);

        const fetchedData = data.restaurants.find(
          (restaurant) => restaurant.id === Number(restaurantId)
        );

        this.restaurant = {
          ...fetchedData,
          openingHours: fetchedData.opening_hours,
          categoryName: fetchedData.Category.name,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得指定餐廳的資料，稍後再試",
        });
      }
    },
  },
};
</script>