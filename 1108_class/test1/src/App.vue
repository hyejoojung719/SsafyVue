<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <img alt="Vue logo" src="@/assets/logo.png" /> -->
    <!-- jsconfig.json의 path 설정 참고-->

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
    <TestComponent /> -->
    <ParentComponent />
    <TestEventBus />
    <!-- 컴포넌트 쓰기 3. template 안에 추가하기 -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

// 컴포넌트 쓰기 1. import 하기
// import TestComponent from "./components/TestComponent.vue";

import ParentComponent from "./components/ParentComponent.vue";
import TestEventBus from "./components/TestEventBus.vue";

// console.log(HelloWorld);

export default {
  name: "App",
  components: {
    // 지역 컴포넌트
    // HelloWorld,
    // 컴포넌트 쓰기 2. 컴포넌트 등록하기
    // TestComponent,
    ParentComponent,
    TestEventBus,
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
