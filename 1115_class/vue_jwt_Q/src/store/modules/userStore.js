import http from "@/util/http";
import jwt_decode from "jwt-decode";

const userStore = {
  namespaced: true,
  state: () => ({
    token: null,
    userInfo: {}, //로그인한 유저 정보
  }),
  getters: {},
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
    SET_TOKEN(state, payload) {
      state.token = payload.token;
    },
  },
  actions: {
    async login({ commit }, loginInfo) {
      let { data } = await http.post("/users/login", loginInfo);

      let token = data.token;
      console.log("발급받은 토큰 : ", token);

      // userStore에 토큰 정보 저장
      commit("SET_TOKEN", { token });

      // axios 요청 시 header에 acess-token 추가
      // http.defaults.headers.common["access-token"] = token;

      let decodedToken = jwt_decode(token);
      console.log("토큰 정보 : ", decodedToken);

      // vuex에 userInfo 정보 세팅
      const { id, name } = decodedToken;
      commit("SET_USER_INFO", { id, name });
    },
    logout({ commit }) {
      // 헤더에서 토큰 정보 제거
      // delete http.defaults.headers.common["access-token"]; // 대괄호 한건 - 때문에, common.access-token

      // userSotre에 token 정보 지우기
      commit("SET_TOKEN", { token: null });
      // vuex store의 유저 정보 비우기
      commit("SET_USER_INFO", {});
    },
  },
};

export default userStore;
