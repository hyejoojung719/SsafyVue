import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/book/list",
    name: "bookList",
    component: () => import("@/views/BookList.vue"),
  },
  {
    path: "/book/detail/:isbn",
    name: "bookDetail",
    component: () => import("@/views/BookDetail.vue"),
  },
  {
    path: "/test",
    name: "helperTest",
    component: () => import("@/views/HelperTest.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
