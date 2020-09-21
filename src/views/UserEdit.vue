<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleFileChange">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <div>
          <img :src="user.image" width="300" />
        </div>
        <input id="image" type="file" name="image" accept="image/*" class="form-control-file" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
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
      const form = e.target;
      const formData = new FormData(form);

      for (let [name, value] of formData.entries()) {
        console.log("name", name, "value", value);
      }

      // 發送 after-submit 事件
    },
  },
};
</script>