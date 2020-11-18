import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login";
import Register from "../pages/Register";

Vue.use(VueRouter);

const routes = [
    { path: '/auth/login', component: Login},
    { path: '/auth/register', component: Register},
];

const router = new VueRouter({
    routes
});

export default router;