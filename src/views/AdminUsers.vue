<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <div v-if="user.id !== currentUser.id">
              <button
                type="button"
                class="btn btn-link"
                v-if="user.isAdmin"
                @click.stop.prevent="toggleUserRole(user.id, user.isAdmin)"
              >
                Set as user
              </button>
              <button
                type="button"
                class="btn btn-link"
                v-else
                @click.stop.prevent="toggleUserRole(user.id, user.isAdmin)"
              >
                Set as admin
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import adminAPI from "../apis/admin.js";
import { Toast } from "../utils/helpers.js";
import { mapState } from "vuex";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: {},
    };
  },
  created() {
    this.fetchUsers();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchUsers() {
      try {
        const { data, statusText } = await adminAPI.users.get();

        if (statusText !== "OK") {
          throw new Error();
        }

        console.log("role data", data);
        console.log("current user", this.currentUser);

        this.users = data.users;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取回所有的使用者資料，稍後再試",
        });
      }
    },
    async toggleUserRole(userId, isAdmin) {
      try {
        const newRole = !isAdmin;
        console.log("new role", newRole, "isAdmin", isAdmin);

        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: newRole.toString(),
        });

        console.log("userId", userId, "isAdmin", newRole);
        console.log("role update", data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return (user = {
              ...user,
              isAdmin: newRole,
            });
          }

          return user;
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法更改使用者角色，稍後再試",
        });
      }
    },
  },
};
</script>