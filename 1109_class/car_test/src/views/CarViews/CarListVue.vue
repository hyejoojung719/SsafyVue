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
      <tr v-for="(car, index) in cars" :key="index">
        <td>{{ car.number }}</td>
        <td>
          <router-link
            :to="{
              name: 'carDetail',
              params: { number: car.number },
            }"
          >
            {{ car.model }}</router-link
          >
        </td>
        <td>{{ car.price }}</td>
        <td>{{ car.brand }}</td>
      </tr>
    </tbody>
    <button class="btn btn-danger" @click="insertCar">작성</button>
  </table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cars: [],
    };
  },
  created() {
    axios.get("http://localhost:9000/api/car").then((result) => {
      this.cars = result.data;
      console.log(this.cars);
    });
  },
  methods: {
    insertCar() {
      this.$router.push({ name: "carInsert" });
    },
  },
};
</script>

<style></style>
