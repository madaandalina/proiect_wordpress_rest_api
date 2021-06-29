<template>
  <div class="container">
    <div v-if="categories">
      <div v-for="category in categories" :key="category" class="box">
        <router-link :to="{ name: 'CatToPosts', params: { id: category.id } }">
          <div v-html="category.name"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Categories",
  data() {
    return {
      categories: [],
      errors: [],
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios
      .get(`https://www.wired.com/wp-json/wp/v2/categories/`)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.categories = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>



<style scoped>
.box {
  padding: 100px 0;
  width: 200px;
  height: 100px;
  text-align: center;
  vertical-align: middle;
  color: rgb(41, 17, 72);
  background: #ddd;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  display: inline-block;
}
</style>
