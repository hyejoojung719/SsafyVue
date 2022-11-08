<template>
  <div id="parent">
    <h1>ParentComponent</h1>
    <ChildComponent @childEvent="childHandling" :data="parentData" /><!-- 바인드 시켜야 함 -->
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent.vue";

export default {
  created() {
    this.$children[0].$on("");
  },
  // created() {
  //   // this가 달라서 아래 방법은 안 된당
  //   // this.$on("ChildEvent", () => {
  //   //   console.log("ChildEvent 핸들링");
  //   // });
  // },
  data() {
    return {
      parentData: "parentData 입니다.",
    };
  },
  components: {
    ChildComponent,
  },
  methods: {
    childHandling(data) {
      console.log("ChildComponent로부터 이벤트 발생");
      console.log(data);
    },
  },
};
</script>

<style scoped>
div #parent {
  background-color: blue;
}
</style>
