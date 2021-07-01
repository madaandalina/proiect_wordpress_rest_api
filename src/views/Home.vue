<template>
  <div class="home">
    <h1>Categories: </h1>
    <Categories />
  </div>
</template>

<script>
import Categories from "../components/Categories.vue";

export default {
  name: "Home",
  components: {
    Categories,
  },

};
</script>

<style >
</style>