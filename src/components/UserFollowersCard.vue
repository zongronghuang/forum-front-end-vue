<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followers.length}}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link :to="'/users/'+follower.id" v-for="follower in followers" :key="follower.id">
        <img :src="follower.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFollowersCard",
  props: {
    userFollowers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      followers: [],
    };
  },
  created() {
    this.fetchFollowers();
  },
  methods: {
    fetchFollowers() {
      this.followers = [...this.userFollowers];
    },
  },
};
</script>