<template>
  <div>
    <div class="mb-3 mt-3">
      <label for="number">Number :</label>
      <input
        type="text"
        class="form-control"
        id="number"
        name="number"
        v-model="car.number"
        readonly
      />
    </div>
    <div class="mb-3">
      <label for="model">Model :</label>
      <input type="text" class="form-control" id="model" name="model" v-model="car.model" />
    </div>
    <div class="mb-3">
      <label for="price">Price :</label>
      <input type="text" class="form-control" id="price" name="price" v-model="car.price" />
    </div>
    <div class="mb-3">
      <label for="brand">Brand :</label>
      <input type="text" class="form-control" id="brand" name="brand" v-model="car.brand" />
    </div>
    <button class="btn btn-danger" @click="modifyCar">수정 완료</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      car: {},
    };
  },
  async created() {
    const number = this.$route.params.number;
    let result = await axios.get("http://localhost:9000/api/car/" + number);
    this.car = result.data;
  },
  methods: {
    async modifyCar() {
      try {
        const number = this.$route.params.number;
        await axios.put("http://localhost:9000/api/car/" + number, this.car);

        alert("수정 성공");
        this.$router.push({ name: "carList" });
      } catch (error) {
        alert("수정 실패");
      }
    },
  },
};
</script>

<style></style>
