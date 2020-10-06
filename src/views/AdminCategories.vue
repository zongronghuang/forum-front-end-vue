<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4" @submit.stop.prevent="createCategory">
      <div class="form-row">
        <div class="col-auto">
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="新增餐廳類別..."
            v-model="newCategoryName"
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary" :diabled="isProcessing">
            新增
          </button>
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
            <div class="category-name" v-show="!category.isEditing">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              @click="handleCancel(category.id)"
              >✕</span
            >
          </td>
          <td class="d-flex justify-content-between">
            <button
              type="button"
              class="btn btn-link mr-2"
              v-show="!category.isEditing"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.prevent.stop="
                updateCategory({
                  categoryId: category.id,
                  name: category.name,
                })
              "
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.prevent.stop="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
import adminAPI from "../apis/admin.js";
import { Toast } from "../utils/helpers.js";

export default {
  name: "AdminCategories",
  components: {
    AdminNav,
  },
  data() {
    return {
      newCategoryName: "",
      categories: [],
      isProcessing: false,
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();

        console.log("category data", data);
        this.categories = data.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached: "",
        }));
      } catch (error) {
        console.log("error", error);

        Toast.fire({
          icon: "error",
          title: "無法取回類別資料",
        });
      }
    },
    // not API-tested /////////////////////////
    async createCategory() {
      try {
        this.isProcessing = true;

        if (!this.newCategoryName.trim()) {
          throw new Error("餐廳名稱不可為空白");
        }

        if (
          this.categories.some(
            (category) => category.name === this.newCategoryName
          )
        ) {
          throw new Error("無法新增，此餐廳已存在");
        }

        // data 內含有 categoryId
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName,
        });

        this.categories.push({
          name: this.newCategoryName,
          id: data.categoryId,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.newCategoryName = "";
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: `${error}`,
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        const { data } = adminAPI.categories.delete({ categoryId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: `無法刪除餐廳類別: ${error}`,
        });
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }

        return category;
      });
    },
    updateCategory({ categoryId }) {
      this.toggleIsEditing(categoryId);
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached,
          };
        }

        return category;
      });

      this.toggleIsEditing(categoryId);
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>