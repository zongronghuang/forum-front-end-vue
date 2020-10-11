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

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ isProcessing ? "處理中" : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins.js";
import { mapState } from "vuex";
import usersAPI from "../apis/users.js";
import { Toast } from "../utils/helpers.js";

export default {
  name: "user-edit",
  mixins: [emptyImageFilter],
  data() {
    return {
      user: {},
      isProcessing: false,
    };
  },
  created() {
    const { id } = this.$route.params;

    if (Number(id) !== Number(this.currentUser.id)) {
      return this.$router.push({ name: "not-found" });
    }

    this.setUser();
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;

    if (Number(id) !== Number(this.currentUser.id)) {
      return this.$router.push({ name: "not-found" });
    }

    this.setUser();
    next();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser(newValue) {
      this.setUser();
      console.log(newValue);
    },
  },
  methods: {
    setUser() {
      this.user = { ...this.currentUser };
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
    async handleSubmit(e) {
      try {
        this.isProcessing = true;
        if (!this.user.name.trim()) {
          this.isProcessing = false;
          return Toast.fire({
            icon: "error",
            title: "名稱不可為空白",
          });
        }

        const form = e.target;
        const formData = new FormData(form);
        const { data } = await usersAPI.update({
          userId: this.currentUser.id,
          formData,
        });
        console.log("update data", data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({
          name: "user",
          params: { id: this.currentUser.id },
        });

        for (let [name, value] of formData.entries()) {
          console.log(name + ": " + value);
        }
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料",
        });
      }
    },
  },
};
</script>