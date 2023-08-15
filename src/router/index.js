import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OptionGroupModifyView from "@/views/OptionGroupModifyView.vue";
import BaseBody from "@/components/BaseBody.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/option-groups/:groupId",
    name: "option-groups",
    component: OptionGroupModifyView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
