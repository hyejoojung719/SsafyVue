import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/car",
    name: "car",
    component: () => import("@/views/CarVue.vue"),
    redirect: "/car/list",
    children: [
      {
        path: "list",
        name: "carList",
        component: () => import("@/views/CarViews/CarListVue.vue"),
      },
      {
        path: "detail",
        name: "carDetail",
        component: () => import("@/views/CarViews/CarDetailVue.vue"),
      },
      {
        path: "modify",
        name: "carModify",
        component: () => import("@/views/CarViews/CarModifyVue.vue"),
      },
      {
        path: "insert",
        name: "carInsert",
        component: () => import("@/views/CarViews/CarInsertVue.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
