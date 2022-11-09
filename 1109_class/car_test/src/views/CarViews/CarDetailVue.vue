<template>
  <table class="table">
    <thead>
      <tr>
        <th>NUMBER</th>
        <th>MODEL</th>
        <th>PRICE</th>
        <th>BRAND</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ car.number }}</td>
        <td>{{ car.model }}</td>
        <td>{{ car.price }}</td>
        <td>{{ car.brand }}</td>
      </tr>
    </tbody>
    <button class="btn btn-danger" @click="goList">목록</button>
    <button class="btn btn-danger" @click="goDelete">삭제</button>
    <button class="btn btn-danger" @click="goModify">수정</button>
  </table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      number: 0,
      car: {},
    };
  },
  async created() {
    this.number = this.$route.params.number;
    console.log("number : ", this.number);

    let result = await axios.get("http://localhost:9000/api/car/" + this.number);
    this.car = result.data;

    console.log("car : ", this.car);
  },
  methods: {
    goList() {
      // console.log("라우터", this.$router);
      this.$router.push({ name: "carList" });
    },
    async goDelete() {
      try {
        await axios.delete("http://localhost:9000/api/car/" + this.number);

        alert("삭제 성공!");
        this.goList();
      } catch (error) {
        alert("삭제 실패");
      }
    },
    goModify() {
      this.$router.push({ name: "carModify", params: { number: this.number } });
    },
  },
};
</script>

<style></style>
