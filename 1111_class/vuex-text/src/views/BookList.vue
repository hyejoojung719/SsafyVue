<template>
  <div>
    <h1>책 목록 조회</h1>
    <table>
      <thead>
        <th v-for="field in fields" :key="field">{{ field }}</th>
      </thead>
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
  </div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("setBookList"); // 그다음 응답이 setBookList가 실행됨 그러나 async await를 붙이면 얘가 실행되면 다음줄 실행
    // this.bookList = this.$store.state.bookList; //computed 없이 이렇게 할 경우 데이터를 바꿔버릴 수 있기 때문에
    console.log("dispatch 다음 줄 "); // 얘부터 먼저 실행(async await없을 경우)
  },
  data() {
    return {
      // bookList: [],
      fields: ["번호", "ISBN", "제목", "저자", "가격"],
    };
  },
  computed: {
    // bookList :  this.$store.state.bookList 요런 느낌
    bookList() {
      return this.$store.state.bookList;
    },
  },
};
</script>

<style></style>
