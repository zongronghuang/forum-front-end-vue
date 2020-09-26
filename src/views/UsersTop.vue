<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img :src="user.image | emptyImage" width="140px" height="140px" />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.followerCount }}</span
        >
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.prevent.stop="deleteFollowing(user.id)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.prevent.stop="addFollowing(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins.js";
import NavTabs from "../components/NavTabs.vue";
import usersAPI from "../apis/users.js";
import { Toast } from "../utils/helpers.js";

export default {
  name: "users-top",
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();

        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        }));
      } catch (error) {
        console.log("error", error);

        Toast.fire({
          icon: "error",
          title: "無法取得美食達人資料，稍後再試",
        });
      }
    },
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: true,
              followerCount: user.followerCount + 1,
            };
          }
          return user;
        });
      } catch (error) {
        console.log("error", error);

        Toast.fire({
          icon: "error",
          title: "無法追蹤使用者，稍後再試",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: false,
              followerCount: user.followerCount - 1,
            };
          }
          return user;
        });
      } catch (error) {
        console.log("error", error);

        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchTopUsers();
  },
};
</script>