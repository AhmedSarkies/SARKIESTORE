import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/Firebase";

import "normalize.css";
import "@/assets/scss/main.scss";

import globalComponents from "@/components/Public/globalComponents";

Vue.config.productionTip = false;

globalComponents.forEach((component) => {
  Vue.component(component.name, component);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
