<template>
  <div>
    <h1>책 상세 조회</h1>
    <table>
      <thead>
        <th v-for="field in fields" :key="field">{{ field }}</th>
      </thead>
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
export default {
  data() {
    return {
      fields: ["ISBN", "제목", "저자", "가격", "설명"],
    };
  },
  async created() {
    let isbn = this.$route.params.isbn;
    await this.$store.dispatch("setBook", { isbn });
  },
  computed: {
    book() {
      return this.$store.state.book;
    },
  },
};
</script>

<style></style>
