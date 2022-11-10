<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <apt-list></apt-list>
  </div>
</template>

<script>
// 1. 불러오기
// 2. 등록하기
// 3. 보여주기

import AptList from "@/components/AptList"; // @ => src 기준
export default {
  name: "App",
  components: {
    AptList,
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
  margin-top: 60px;
}
</style>
