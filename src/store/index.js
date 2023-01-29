import { createStore } from "vuex";
import products from "./product.js";
import cart from './cart.js'
export default createStore({
    // state: {},
    // mutations: {},
    // actions: {},
    modules: {
        products,
        cart
    }
});