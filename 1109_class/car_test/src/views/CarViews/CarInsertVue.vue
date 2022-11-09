<template>
  <div>
    <div class="mb-3 mt-3">
      <label for="number">Number :</label>
      <input type="text" class="form-control" id="number" name="number" v-model="number" />
    </div>
    <div class="mb-3">
      <label for="model">Model :</label>
      <input type="text" class="form-control" id="model" name="model" v-model="model" />
    </div>
    <div class="mb-3">
      <label for="price">Price :</label>
      <input type="number " class="form-control" id="price" name="price" v-model="price" />
    </div>
    <div class="mb-3">
      <label for="brand">Brand :</label>
      <input type="text" class="form-control" id="brand" name="brand" v-model="brand" />
    </div>
    <button class="btn btn-danger" @click="insertCar">등록</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      number: "",
      model: "",
      price: 0,
      brand: "",
    };
  },
  methods: {
    async insertCar() {
      let car = {
        number: this.number,
        model: this.model,
        price: this.price,
        brand: this.brand,
      };

      try {
        await axios.post("http://localhost:9000/api/car", car);

        alert("등록 성공");
        this.$router.push({ name: "carList" });
      } catch (error) {
        alert("등록 실패");
      }
    },
  },
};
</script>

<style></style>
