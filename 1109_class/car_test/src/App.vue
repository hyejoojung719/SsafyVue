<template>
  <div id="app">
    <HeaderVue />
    <CarVue />
    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from "@/components/HeaderVue.vue";
import FooterVue from "@/components/FooterVue.vue";
import CarVue from "@/views/CarVue.vue";

export default {
  components: {
    HeaderVue,
    FooterVue,
    CarVue,
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
