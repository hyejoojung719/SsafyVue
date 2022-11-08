<template>
  <div>
    <h1>TestEventBus</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { EventBus } from "@/util/EventBus.js";
export default {
  data() {
    return {
      message: "",
    };
  },
  created() {
    EventBus.$on("goTestVue", (data) => {
      console.log("TestEventBus에서 데이터 수신 : ", data);
      this.message = data;
    });
  },
};
</script>

<style></style>
