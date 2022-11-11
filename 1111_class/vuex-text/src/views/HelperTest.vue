<template>
  <div>
    <h1>책 목록 조회</h1>
    <table>
      <tbody>
        <tr v-for="(book, index) in bookList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ book.isbn }}</td>
          <td>
            <router-link
              :to="{
                name: 'bookDetail',
                params: { isbn: book.isbn },
              }"
              >{{ book.title }}</router-link
            >
          </td>
          <td>{{ book.autor }}</td>
          <td>{{ book.price }}</td>
        </tr>
      </tbody>
    </table>
    <h1>책 상세 조회</h1>
    <table>
      <tbody>
        <tr>
          <td>{{ book.isbn }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.price }}원</td>
          <td>{{ book.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    // this.$store.dispatch("setBook", { isbn: 1 });
    // this.$store.dispatch("setBookList");
    // 아래 method 속성을 만든다.
    this.setBook({ isbn: "1" });
    this.setBookList();
  },
  methods: {
    ...mapActions(["setBook", "setBookList"]),
  },

  computed: {
    ...mapState(["book", "bookList"]),
    // book() {
    //   return this.$store.state.book;
    // },
    // books() {
    //   return this.$store.state.bookList;
    // },
  },
};
</script>

<style></style>
