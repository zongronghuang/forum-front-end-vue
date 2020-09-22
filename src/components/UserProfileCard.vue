<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{profile.name}}</h5>
          <p class="card-text">{{profile.email}}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{profile.Comments.length}}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{profile.FavoritedRestaurants.length}}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{userProfile.Followings.length}}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{userProfile.Followers.length}}</strong> followers (追隨者)
            </li>
          </ul>
          <p></p>
          <form action="/following/512?_method=DELETE" method="POST" style="display: contents;">
            <!-- <button
              type="submit"
              class="btn btn-primary"
              v-if="profile.id == currentViewingUser.id"
            >編輯</button>-->

            <!-- <div v-else> -->
            <button
              type="submit"
              class="btn btn-danger"
              v-if="profile.isFollowed"
              @click.stop.prevent="unfollowUser"
            >取消追蹤</button>
            <button type="submit" class="btn btn-primary" v-else @click.stop.prevent="followUser">追蹤</button>
            <!-- </div> -->
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins.js";

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
  },
  data() {
    return {
      profile: {},
      currentViewingUser: {},
    };
  },
  created() {
    this.getProfileData();
    this.getUserData();
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
    followUser() {
      this.profile = {
        ...this.profile,
        isFollowed: true,
      };

      this.$emit("after-follow");
    },
    unfollowUser() {
      this.profile = {
        ...this.profile,
        isFollowed: false,
      };

      this.$emit("after-unfollow");
    },
  },
};
</script>