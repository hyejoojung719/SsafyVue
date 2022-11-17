<template>
  <div>
    <h1>도서 상세 정보</h1>
    <div>
      <button @click="moveList">목록</button>
    </div>
    <table>
      <thead>
        <th v-for="field in fields" :key="field">{{ field }}</th>
      </thead>
      <tbody>
        <td>{{ book.isbn }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.price }}원</td>
        <td>
          <!-- 텍스트 내용을 그대로 출력하고 싶은 경우 -->
          <span style="white-space: pre-line">
            {{ book.description }}
          </span>
        </td>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      fields: ["번호", "ISBN", "제목", "저자", "가격"],
    };
  },
  computed: {
    ...mapState("bookStore", ["book"]),
  },
  created() {
    const isbn = this.$route.params.isbn;
    this.setBook(isbn);
  },
  methods: {
    ...mapActions("bookStore", ["setBook"]),
    //목록페이지 이동
    moveList() {
      this.$router.push(`/book`);
    },
  },
};
</script>
