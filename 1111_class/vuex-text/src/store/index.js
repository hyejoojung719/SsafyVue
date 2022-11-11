import Vue from "vue";
import Vuex from "vuex";

import http from "@/util/http"; // /index.js가 뒤에 생략 되어있음(파일이 하나라서)

import { createVuexPersistedState } from "vue-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createVuexPersistedState({
      //storage:window.localStorage 가default 므로
      storage: window.sessionStorage,
    }),
  ],
  state: {
    bookList: [
      // { isbn: "1", title: "제목1", author: "저자1", price: 1000 },
      // { isbn: "2", title: "제목2", author: "저자2", price: 1000 },
      // { isbn: "3", title: "제목3", author: "저자3", price: 1000 },
    ],
    book: {},
    price: 1000,
  },
  getters: {
    //computed와 비슷한 ...
    viewPrice(state) {
      return state.price * 30;
    },
  },
  mutations: {
    // state를 바꾸는것이므로 state가 넘어온다.
    // 대문자 _ 사용
    SET_BOOK_LIST(state, payload) {
      state.bookList = payload.bookList;
    },
    SET_BOOK(state, payload) {
      state.book = payload.book;
    },
  },
  actions: {
    // data를 비동기통신으로 가져오고 mutations에 있는 메소드를 호출해서 넣어준다.
    setBookList(/*context*/ { commit }) {
      // ES6에서는 객체에서 하나를 꺼낼때 {}를 써서 사용하면 된다.
      // contex라는 객체가 자동으로 넘어옴 => context : vuex store 객체로부터 actions에서 필요한 몇몇 속성들을 모아놓은 객체
      // 얘는 무조건 promise를 return 해야함
      // promise를 쓰는 이유는 순서를 맞춰야 하므로
      return http
        .get("/books")
        .then(({ data }) => {
          console.log("요청 응답 받음");
          console.log(data);
          // bookList 셋팅
          commit("SET_BOOK_LIST", { bookList: data });
        })
        .catch(() => {});
    },

    async setBook({ commit }, payload) {
      try {
        let { data } = await http.get("/books/" + payload.isbn);
        commit("SET_BOOK", { book: data }); // 가독성을 위해 한 번 감싸고 보내는게 좋다.
      } catch (error) {
        console.log(error);
      }
    },

    //다른 방법 async await
    /* async setBookList({ commit }) {
      try {
        let { data } = await http.get("/books");
        console.log(data);
        commit("SET_BOOK_LIST", data);
      } catch (error) {}
    },
    */
  },
  modules: {
    // store 분리
  },
});
