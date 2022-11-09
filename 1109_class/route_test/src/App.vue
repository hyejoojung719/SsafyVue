<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <HeaderVue />
      <router-view />
      <!-- <MainVue /> -->
      <FooterVue />
    </nav>

    <!-- home.vue, about.vue 보여주는 곳 -->
  </div>
</template>

<script>
import HeaderVue from "./components/HeaderVue.vue";
import FooterVue from "./components/FooterVue.vue";
// import MainVue from "./components/MainVue.vue"; // MainVue에 router-view를 담아서 보여줄 수 있다.

export default {
  components: {
    HeaderVue,
    FooterVue,
    // MainVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
