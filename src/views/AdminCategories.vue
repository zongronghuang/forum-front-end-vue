<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input type="text" class="form-control" placeholder="新增餐廳類別..." v-model="newCategoryName" />
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-primary" @click.stop.prevent="createCategory">新增</button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">{{ category.id }}</th>
          <td class="position-relative">
            <div class="category-name">{{ category.name }}</div>
          </td>
          <td class="d-flex justify-content-between">
            <button type="button" class="btn btn-link mr-2">Edit</button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.prevent.stop="deleteCategory(category.id)"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
import { v4 as uuidv4 } from "uuid";

const dummyData = {
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z",
    },
  ],
};

export default {
  name: "AdminCategories",
  components: {
    AdminNav,
  },
  data() {
    return {
      newCategoryName: "",
      categories: [],
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories;
    },
    createCategory() {
      this.categories.push({
        id: uuidv4(),
        name: this.newCategoryName,
      });

      this.newCategoryName = "";
    },
    deleteCategory(categoryId) {
      this.categories = this.categories.filter(
        (category) => category.id !== categoryId
      );
    },
  },
};
</script>