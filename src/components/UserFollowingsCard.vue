<template>
  <div class="card">
    <div class="card-header">
      <strong>{{userFollowings.length}}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        :to="{name: 'user', params: {id: following.id}}"
        v-for="following in userFollowings"
        :key="following.id"
      >
        <img :src="following.image | emptyImage" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins.js";

export default {
  name: "UserFollowingsCard",
  mixins: [emptyImageFilter],
  props: {
    userFollowings: {
      type: Array,
      required: true,
    },
  },
};
</script>