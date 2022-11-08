<template>
  <div id="child">
    <h1>ChildComponent</h1>
    <p>부모로부터 전달받은 데이터 :{{ data }}</p>
    <button @click="child">이벤트 발생</button>
    <br />
    <button @click="goEventBus">EventBus를 통한 이벤트 발생</button>
  </div>
</template>

<script>
// 부모자식 관계가 아닌 다른 애한테서 가져오기
import { EventBus } from "@/util/EventBus.js"; // 뷰 인스턴스 객체 가져오기

export default {
  props: ["data"],
  // props : 부모 컴포넌트에서 자식 컴포넌트로  데이터 전달할 때 사용되는 단방향 데이터 전달 방식

  methods: {
    // 자식에서 부모로 data 넘기는 법
    // 1. 자식에서 이벤트 발생
    // 2. 부모쪽에서 이벤트 핸들링(매개변수로 데이터를 보낼 수 있다)
    child() {
      this.$emit("childEvent", "자식으로부터 받은 데이터");
      // this => ChildComponent.vue
      // 이벤트를 주면서 데이터를 함께 넘길 수 있다.
    },
    goEventBus() {
      EventBus.$emit("goTestVue", "전달된 데이터");
    },
  },
};
</script>

<style scoped>
#child {
  background-color: blueviolet;
}
</style>
