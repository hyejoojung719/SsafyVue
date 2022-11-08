import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
// vue instance를 생성
// $mound() =>  뷰 인스턴스와 화면을 붙이는거
// 즉, 여기서는 id가 app인 요소와 뷰인스턴스를 바인딩 한 것
