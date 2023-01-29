import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/TheHome.vue";
import cart from '../components/TheCart.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/cart",
        name: "cart",
        component: cart
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
