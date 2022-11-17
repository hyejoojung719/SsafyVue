import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  //홈 화면
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  //About 화면
  {
    path: "/about",
    name: "about",

    component: () => import("@/views/AboutView.vue"),
  },
  //책 화면
  {
    path: "/book",
    name: "book",
    component: () => import("@/views/BookView.vue"),
    redirect: "/book/list",
    children: [
      //책 전체조회
      {
        path: "list",
        name: "bookList",
        component: () => import("@/views/BookView/BookList.vue"),
      },
      //Book 상세 화면
      {
        path: "detail/:isbn",
        name: "bookDetail",
        component: () => import("@/views/BookView/BookView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((/* 이동하려는 라우트 정보 */ to, from, next) => {
  // 라우팅 하기 전에 체크하는 곳

  // 라우팅 시 해당 라우트가 책 관련 라우트이고
  // 유저정보를 갖고 있지 않다면
  if (to.path.includes("book") && !store.state.userStore.userInfo.id) {
    alert("로그인이 필요한 페이지입니다.");
    return false;
  }
  // 해당 라우트로 이동
  next();
});

export default router;
