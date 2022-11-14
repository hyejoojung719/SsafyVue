<template>
  <button @click="addCount">{{ title }} - {{ count }}</button>
</template>

<script>
export default {
  name: "SubjectComponent",
  props: ["title"],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount: function () {
      this.count += 1;
      // this.$emit("addtotcount"); 부모한테 안 보냄
      this.$store.state.count++; // this.$store => store/index.js
    },
  },
};
</script>

<style></style>
