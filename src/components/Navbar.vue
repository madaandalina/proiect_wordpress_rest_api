<template>

    <h1 class="faded-underline">Vue API Wordpress</h1>
  <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
    <div class="container alignment">
      <router-link to="/" class="navbar-link">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/about" class="nav-link active" aria-current="page"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/postsdisplay" class="nav-link">Posts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
  padding:5px;
}

.alignment{
  line-height:50px;
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
*/
h1{
    
    margin-top:10px;
} 

.navbar-custom {
    background-color:#E3D0D8;
}
</style>


