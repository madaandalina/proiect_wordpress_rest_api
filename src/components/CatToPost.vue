<template>
  <div>
    <div v-for="catpos in catposFunc" :key="catpos">
      <div v-html="catpos.title.rendered"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CatToPost",
  methods: {
    ...mapActions(["catposApi"]),
  },
  computed: {
    ...mapGetters(["catposFunc"]),
  },
  created() {
    this.catposApi();
  },

  // // Fetches posts when the component is created.
  // created() {
  //  let num = this.$route.params.id;
  //  axios
  //     .get(`https://www.wired.com/wp-json/wp/v2/posts/?categories=${num}`)
  //     .then((response) => {
  //       // JSON responses are automatically parsed.
  //       this.catpos = response.data;
  //     })
  //     .catch((e) => {
  //       this.errors.push(e);
  //     });
  //    // console.log(this.$route.params.id);

  // },
};
</script>
