import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PostsDisplay from "../views/PostsDisplay.vue"
import CatToPosts from "../views/CatToPosts.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/postsdisplay",
    name: "PostsDisplay",
    component: PostsDisplay,
  },
  {
    path: "/cattoposts/:id/",     //categories to posts
    name: "CatToPosts",
    component: CatToPosts,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
