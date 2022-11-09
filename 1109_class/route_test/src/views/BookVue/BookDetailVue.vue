<template>
  <div id="app">
    <div class="regist">
      <h1 class="underline">SSAFY 도서 정보</h1>
      <div class="regist_form">
        <label for="isbn">도서번호</label>
        <div class="view">{{ book.isbn }}</div>
        <label for="title">도서명</label>
        <div class="view">{{ book.title }}</div>
        <label for="author">저자</label>
        <div class="view">{{ book.author }}</div>
        <label for="price">가격</label>
        <div class="view">{{ book.price }}</div>
        <label for="description">설명</label>
        <div class="view">{{ book.description }}</div>
        <div style="padding-top: 15px">
          <button class="btn btn-warning">수정</button>
          <button class="btn btn-danger">삭제</button>
          <button class="btn btn-primary" @click="goList">목록</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isbn: 0,
      book: {},
    };
  },
  async created() {
    // console.log(this.$route);
    this.isbn = this.$route.params.isbn;

    let result = await axios.get("http://localhost:9000/api/books/" + this.isbn);
    this.book = result.data;
  },
  methods: {
    goList() {
      this.$router.push({ name: "bookList" }); // 페이지 이동은 router
    },
    // goModify() {},
    // deleteBook() {},
  },
};
</script>

<style></style>
