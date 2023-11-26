import App from "../App.vue";
import Watch from "../views/Watch.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: App
    },
    {
      path: "/watch",
      component: Watch
    }
  ]
});

export default router;