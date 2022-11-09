import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import BookVue from "../views/BookVue.vue";
import QnaVue from "../views/QnaVue.vue";

// bookView에 대한 라우트

Vue.use(VueRouter);

// 객체 배열 형태로 넣어줌
// 라우터뷰에 뭐가 들어갈지 알려줌
const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/AboutView.vue"),
  // },
  {
    path: "/book",
    name: "book",
    component: BookVue,
    redirect: "/book/list", // /book으로 요청 오면 자동적으로 /book/list로 보내게끔 할 수 있다.
    // bookVue내부에도 라우트 뷰가 있어서 여기에 속성 추가
    children: [
      // children을 만들어서 여기에 만든다.
      {
        path: "list", // /list 이렇게 하면 앞에 /가붙어서 절대경로가된다. 그래서 /가 없으면 된당..?
        name: "bookList",
        component: () => import("@/views/BookVue/BookListVue.vue"),
      },
      {
        path: "detail/:isbn", // detail뒤에붙은 값을 isbn에 담는다.
        name: "bookDetail",
        component: () => import("@/views/BookVue/BookDetailVue.vue"),
      },
    ],
  },
  {
    path: "/qna",
    name: "qna",
    component: QnaVue,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL, // 초기경로 "/"
  routes,
});

export default router;
