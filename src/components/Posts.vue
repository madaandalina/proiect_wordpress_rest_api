<template>
  <!-- <div class="container">
    <div v-if="posts" class="aranjare">
      <div v-for="post of posts" :key="post"  class="box">
        <p v-html="post.title.rendered"></p>
        <p>{{post.body}}</p>
      </div>
    </div>

    <div v-if="errors && errors.length" >
      <div v-for="error of errors" :key="error" class="box">
        {{error.message}}
      </div>
    </div> -->

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
                    <td>{{post.date_gmt}}</td>
                </tr>
            </tbody>
        </table>


  <!-- </div> -->
</template>

<script>
import axios from 'axios';

export default {
  name: "Posts",
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`https://www.wired.com/wp-json/wp/v2/posts/?per_page=100`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
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
  margin:15px;
  display:flex;
  justify-content:space-between;
  display: inline-block;
  
}
</style>
