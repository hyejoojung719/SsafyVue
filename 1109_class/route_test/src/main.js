import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // 폴더지만 안에 index.js하나만 있어서 가능. index.js를 의미함

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
