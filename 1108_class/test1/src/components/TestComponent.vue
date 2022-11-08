<template>
  <!-- 루트 태그 -->
  <div>
    <h1>Test 컴포넌트</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
// vue 컴포넌트의 옵션값 지정
export default {
  // 템플릿 제외한 나머지 옵션들 넣어주면 됨
  data() {
    return {
      text: "안녕하세요",
    };
  },
};
</script>

<style>
p {
  background-color: blue;
}
</style>
