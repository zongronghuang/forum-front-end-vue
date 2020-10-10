<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ userProfile.Followings.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ userProfile.Followers.length }}</strong> followers
              (追隨者)
            </li>
          </ul>
          <p></p>
          <form action method="GET" style="display: contents">
            <router-link
              :to="{ name: 'user-edit', params: { id: profile.id } }"
              type="submit"
              class="btn btn-primary"
              v-if="profile.id === currentViewingUser.id"
              >編輯</router-link
            >

            <div v-else>
              <button
                type="submit"
                class="btn btn-danger"
                v-if="this.isFollowed"
                @click.stop.prevent="unfollowUser(profile.id)"
              >
                取消追蹤
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                v-else
                @click.stop.prevent="followUser(profile.id)"
              >
                追蹤
              </button>
            </div>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins.js";
import usersAPI from "../apis/users.js";
import { Toast } from "../utils/helpers.js";

export default {
  name: "UserProfileCard",
  mixins: [emptyImageFilter],
  props: {
    userProfile: {
      type: Object,
      required: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      profile: {},
      currentViewingUser: {},
      isFollowed: this.initialIsFollowed,
    };
  },
  created() {
    this.getProfileData();
    this.getUserData();
  },
  watch: {
    userProfile(newValue) {
      this.profile = {
        ...this.profile,
        ...newValue,
      };
    },
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed;
    },
  },
  methods: {
    getProfileData() {
      this.profile = {
        ...this.userProfile,
      };
    },
    getUserData() {
      this.currentViewingUser = {
        ...this.currentUser,
      };
    },
    async followUser(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        (this.isFollowed = true), this.$emit("after-follow");
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法追蹤使用者，稍後再試",
        });
      }
    },
    async unfollowUser(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.isFollowed = false;

        this.$emit("after-unfollow");
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，稍後再試",
        });
      }
    },
  },
};
</script>