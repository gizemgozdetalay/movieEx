import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";


import Vue from "vue";
import Vuelidate from "vuelidate";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.use(Vuelidate);
Vue.use(axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
