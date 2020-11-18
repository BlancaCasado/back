import Vue from "vue";
import App from "./App.vue";
window.axios = require("axios");
window.req = axios.create({
    baseUrl:"/"
})
// import VueRouter from 'vue-router';

// Vue.use(VueRouter);
import router from "./router/router";


new Vue({
    router,
    render: h => h(App)
}).$mount("#app");