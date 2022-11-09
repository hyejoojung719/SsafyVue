<template>
  <div>
    <h1>Header</h1>
    <!-- <button @click="viewChange('book')">책 관리</button>
    <button @click="viewChange('qna')">큐앤에이</button> -->
    <nav>
      <!-- 경로로 하는법
      <router-link to="/book">Book</router-link> |
      <router-link to="/qna">QnA</router-link> -->

      <!-- name으로 하는법 => 객체를 전달해야한다.-->
      <router-link :to="{ name: 'book' }">Book</router-link> |
      <router-link :to="{ name: 'qna' }">QnA</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  // methods: {
  //   viewChange(data) {
  //     this.$emit("viewChange", data);
  //   },
  // },
};
</script>

<style scoped>
/* scoped를 붙여서 현재 컴포넌트에만 style을 적용한다.  */
div {
  background-color: rgb(142, 245, 236);
}
</style>
