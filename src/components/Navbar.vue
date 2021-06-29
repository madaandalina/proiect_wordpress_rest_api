<template>
  <div id="nav">
    <div class="nav-left">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/postsdisplay">Posts</router-link>
    </div>
    <h1 class="faded-underline">Vue API Wordpress</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.faded-underline::after {
  content: "";
  display: block;
  background: var(--color);
  width: var(--width);
  height: var(--thickness);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 var(--thickness) calc(var(--thickness) * 2) var(--color);
}

.faded-underline {
  --color: black;
  --standard-width: 300px;
  --width: var(--standard-width);
  --thickness: 2.8px;
  text-align: center;
  margin-bottom: 30px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* .nav-left{
    float:left;
    z-index:10;
}

h1{
    transform: translateY(-25px);
    z-index:-1;
} */
</style>


