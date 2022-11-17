<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/">
          <img src="@/assets/ssafy_logo.png" alt="싸피 로고" width="90px" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <router-link :to="{ name: 'home' }"> Home </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link :to="{ name: 'about' }"> about </router-link></a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                책 관리
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="#"><router-link :to="{ name: 'book' }">책 목록</router-link></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav ml-auto">
          <li v-if="!userInfo.id" class="nav-item">
            <a href="#" @click.prevent="loginModal.show()"> 로그인 </a>
          </li>
          <template v-else>
            <li class="nav-item">
              <a href="#" @click.prevent="logout"> 로그아웃 </a>
            </li>
            <li class="nav-item">
              <span>{{ userInfo.id }}님 환영합니다.</span>
            </li>
          </template>
        </ul>
      </div>
    </nav>

    <!-- Modal Start -->
    <div class="modal fade" id="loginModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">로그인</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="id">id</label>
                <input type="text" class="form-control" id="id" v-model="loginInfo.id" required />
              </div>
              <div class="form-group">
                <label for="pass">비밀번호</label>
                <input type="password" class="form-control" id="pass" v-model="loginInfo.pass" required />
              </div>
              <button class="btn btn-success" type="submit">로그인</button>
              <button type="button" class="btn btn-secondary" @click="loginModal.hide()">닫기</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal End -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    //로그인 모달 객체 생성
    this.loginModal = new this.$bootstrap.Modal("#loginModal");
  },
  data() {
    return {
      loginInfo: {},
      loginModal: null, //로그인 모달 객체
    };
  },
  computed: {
    ...mapState("userStore", ["userInfo"]),
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("userStore/login", this.loginInfo);
        this.loginModal.hide(); //로그인 모달창 숨기기
      } catch (error) {
        alert("로그인 실패");
      }
    },
    async logout() {
      await this.$store.dispatch("userStore/logout");
      this.$router.push("/").catch(() => {}); //홈 화면 이동
    },
  },
};
</script>
