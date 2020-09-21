<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followings.length}}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link :to="'/users/'+following.id" v-for="following in followings" :key="following.id">
        <img :src="following.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFollowingsCard",
  props: {
    userFollowings: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      followings: [],
    };
  },
  created() {
    this.fetchFollowings();
  },
  methods: {
    fetchFollowings() {
      this.followings = [...this.userFollowings];
    },
  },
};
</script>