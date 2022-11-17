<template>
  <div id="app">
    <NavView />
    <router-view />
  </div>
</template>

<script>
import NavView from "@/components/common/NavView.vue";
export default {
  components: {
    NavView,
  },
};
</script>

<style>
@import "@/assets/mvp.css";
</style>
