<template>
  <div class="container">
    <table class="table is-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Posted at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in postsFunc" :key="post">
          <td v-html="post.title.rendered"></td>
          <td>{{ post.date_gmt }}</td>
        </tr>
      </tbody>
    </table>

    <button v-on:click="decresePage" class="button btn-primary m-4 previous">
      Previous
    </button>
    <span>{{ pageNr }}</span>
    <button v-on:click="incresePage" class="button btn-primary m-4 next">
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Posts",
  data() {
    return {
      pageNr: Number,
    };
  },
  methods: {
    ...mapActions(["postsApi"]),
    incresePage() {
      this.pageNr += 1;
      this.postsApi(this.pageNr);
    },
    decresePage() {
      if (this.pageNr > 1) {
        this.pageNr -= 1;
        this.postsApi(this.pageNr);
      }
    },
  },
  computed: {
    ...mapGetters(["postsFunc"]),
  },

  created() {
    this.pageNr = 1;
    this.postsApi();
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
