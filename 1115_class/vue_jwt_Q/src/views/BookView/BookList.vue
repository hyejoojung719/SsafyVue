<template>
  <div>
    <h1>도서 목록</h1>
    <table>
      <thead>
        <th v-for="field in fields" :key="field">{{ field }}</th>
      </thead>
      <tbody></tbody>
      <tr v-for="(book, index) in books" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ book.isbn }}</td>
        <td>
          <router-link
            :to="{ name: 'bookDetail', params: { isbn: book.isbn } }"
            >{{ book.title }}</router-link
          >
        </td>
        <td>{{ book.author }}</td>
        <td>{{ book.price }}</td>
      </tr>
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
    //mapState사용
    ...mapState("bookStore", ["books"]),
  },
  created() {
    //mapActions 사용
    this.setBooks();
  },
  methods: {
    //store의 setBooks 메소드를 직접 호출가능하도록 등록
    ...mapActions("bookStore", ["setBooks"]),
  },
};
</script>
