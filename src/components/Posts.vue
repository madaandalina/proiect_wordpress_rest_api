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
        <tr v-for="post in posts" :key="post">
          <td v-html="post.title.rendered"></td>
          <td>{{ post.date_gmt }}</td>
        </tr>
      </tbody>
    </table>

    <button v-on:click="decresePage" class="button btn-primary m-4  previous">
      Previous
    </button>
    <span>{{pageNr}}</span>
    <button v-on:click="incresePage" class="button btn-primary m-4  next">
       Next  
    </button>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",
  data() {
    return {
      pageNr: Number,
      posts: [],
      errors: [],
    };
  },
  methods: {
    getAxios() {
      axios
        .get(
          `https://www.wired.com/wp-json/wp/v2/posts/?per_page=15&page=${this.pageNr}`
        )
        .then((response) => {
          // JSON responses are automatically parsed.
          this.posts = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    incresePage() {
      this.pageNr += 1;
      console.log(this.pageNr);
      this.getAxios();
    },
    decresePage() {
      if (this.pageNr > 1) {
        this.pageNr -= 1;
        console.log(this.pageNr);
         this.getAxios();
      }
    },
  },

  // Fetches posts when the component is created.
  created() {
    this.pageNr = 1;
    this.getAxios();
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
