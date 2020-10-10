<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <!-- profile -->
        <UserProfileCard
          :user-profile="profile"
          :initial-is-followed="isFollowed"
          :current-user="currentUser"
          @after-follow="afterFollow"
          @after-unfollow="afterUnfollow"
        />
        <div class="row">
          <div class="col-md-4">
            <!-- 追蹤者 -->
            <UserFollowingsCard :user-followings="profile.Followings" />
            <br />
            <!-- 追隨者 -->
            <UserFollowersCard :user-followers="profile.Followers" />
          </div>
          <div class="col-md-8">
            <!-- 評論的餐廳 -->
            <UserCommentsCard :user-comments="profile.Comments" />
            <br />
            <!-- 收藏的餐廳 -->
            <UserFavoritedRestaurantsCard
              :user-favorites="profile.FavoritedRestaurants"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard";
import UserFollowersCard from "../components/UserFollowersCard";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard";
import UserCommentsCard from "../components/UserCommentsCard";
import usersAPI from "../apis/users.js";
import { Toast } from "../utils/helpers.js";
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserFollowersCard,
    UserFollowingsCard,
    UserFavoritedRestaurantsCard,
    UserCommentsCard,
  },
  data() {
    return {
      profile: {},
      isFollowed: false,
    };
  },
  created() {
    const userId = this.$route.params.id;
    this.fetchUser(userId);
    console.log("current user", this.currentUser);
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const userId = to.params.id;
    this.fetchUser(userId);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        const response = await usersAPI.get({ userId });
        console.log("user response", response);

        const { data, statusText } = response;

        if (statusText !== "OK") {
          throw new Error();
        }

        this.profile = { ...data.profile };
        this.isFollowed = data.isFollowed;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得指定的使用者資料，稍後再試",
        });
      }
    },
    afterFollow() {
      if (
        !this.profile.Followers.some(
          (follower) => follower.id === this.currentUser.id
        )
      ) {
        this.profile.Followers.push({ ...this.currentUser });
      }
    },
    afterUnfollow() {
      this.profile.Followers = this.profile.Followers.filter(
        (follower) => follower.id !== this.currentUser.id
      );
    },
  },
};
</script>