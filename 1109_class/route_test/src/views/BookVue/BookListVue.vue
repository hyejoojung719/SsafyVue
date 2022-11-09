<template>
  <div id="app">
    <div>
      <h1 class="underline">도서 목록</h1>
      <div>
        <table id="book-list">
          <colgroup>
            <col style="width: 5%" />
            <col style="width: 20%" />
            <col style="width: 40%" />
            <col style="width: 20%" />
            <col style="width: 15%" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>ISBN</th>
              <th>제목</th>
              <th>저자</th>
              <th>가격</th>
            </tr>
          </thead>
          <tbody>
            <!-- 배열 길이만큼 tr>td 요소 만들어야함-->
            <tr v-for="(book, index) in books" :key="index">
              <!-- 책 번호도 뽑아올 것이므로 index 추가-->
              <td>{{ index + 1 }}</td>
              <td>{{ book.isbn }}</td>
              <td>
                <!--to="/book/detail"-->
                <!-- template 에서는 router-view, router-link 2가지 가능 -->
                <!-- params에 넘겨줄 데이터를 담는다, 객체도 넘길 수 있다.-->
                <!-- 쿼리로 보내기
                  <router-link :to="`/book/detail?isbn=${book.isbn}`"> 또는  <router-link :to="'/book/detail?isbn=' + book.isbn">
                -->
                <!-- path: "detail/:isbn"로 설정했을 때 <router-link :to="`/book/detail/${book.isbn}`">  -->
                <router-link
                  :to="{
                    name: 'bookDetail',
                    params: { isbn: book.isbn },
                    query: { isbn: book.isbn },
                  }"
                >
                  <!-- 객체를 보낼때는 params에 담아서 보내는게 좋다 -->
                  {{ book.title }}</router-link
                >
              </td>
              <td>{{ book.author }}</td>
              <td>{{ book.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center">게시글이 없습니다.</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      books: [],
    };
  },
  created() {
    // console.log("router 객체 : ", this.$router);
    // console.log("route 객체 : ", this.$route);

    /*
      router => 웹 어플리케이션 전체에서 딱 하나만 존재
      그렇기에 전반적인 라우터 기능 관리

      route => 현재 활성화된 라우트의 상태를 저장한 객체
    */

    axios.get("http://localhost:9000/api/books").then((result) => {
      // console.log(result);
      this.books = result.data;
    });
  },
};
</script>

<style></style>

// views에 있어야하는 애들은 vue의 가장 최상위단 애들을 가져와야한다. 예를들어 Book에서 Bookvue
