import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/home/homePage.vue";
import PostView from "@/views/post/postPage.vue";
import PageView from "@/views/pages/pageView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "home/post",
        component: PostView,
      },
    ],
  },
  {
    path: "/page",
    name: "page",
    component: PageView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
