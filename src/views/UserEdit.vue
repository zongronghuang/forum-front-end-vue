<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          v-model="user.name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <div class="mb-3">
          <img v-if="user.image" :src="user.image | emptyImage" width="300" />
        </div>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins.js";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  name: "user-edit",
  mixins: [emptyImageFilter],
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.user = { ...dummyUser.currentUser };
    },
    handleFileChange(e) {
      const { files } = e.target;

      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);

        this.user.image = imageURL;
      }
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);

      for (let [name, value] of formData.entries()) {
        console.log(name, value);
      }
    },
  },
};
</script>