const cart = {
    state: {
        cartData: {
            products: [],
            totalPrice: 0,
            Quantities: 0
        }
    },
    getters: {
        getCart(state) {
            return state.cartData;
        },
        getPrice: (state) => {
            let price = 0;
            state.cartData.products.forEach(product => (
                price += product.totalPrice//price=price+product.totalPrice
            ))
            return price;
        },
        getQuantities: (state) => { //update the product arr with updated prod qnty
            let qauntites = 0;
            state.cartData.products.forEach(prod => (
                qauntites += parseInt(prod.quantity)
            ))
            return qauntites;
        },

    },
    mutations: {
        add(state, payload) {
            const product = state.cartData.products.find(pro => pro.id === payload.id);
            // console.log(product)
            if (product) {
                return state;
            } else {
                payload.totalPrice = parseInt(payload.quantity) * payload.price;
                // console.log(payload);
                state.cartData = { ...state.cartData, products: [...state.cartData.products, payload], totalPrice: state.cartData.totalPrice + payload.price, Quantities: state.cartData.Quantities + 1 };
                console.log(state.cartData)
            }
        },
        updateQty(state, payload) {
            // console.log(state, payload.qty, payload.id)
            const product = state.cartData.products.find(prod => prod.id === payload.id);
            console.log(product) //we bind in cart.vue product.quantity so quantity will updated here
            // js get input value as string so here we conver quantity value to number
            product.totalPrice = product.price * parseInt(product.quantity);
            // console.log(product.totalPrice);
            const index = state.cartData.products.findIndex(product => product.id === payload.id);
            console.log(index)
            //in products arr on this index  replace the product as this product
            state.cartData.products[index] = product; //products[0]=[product]
        },
        deleteProduct: (state, id) => {
            state.cartData.products = state.cartData.products.filter(product => product.id !== id);
        }
    },
    actions: {
        addToCart({ commit }, payload) {
            commit('add', payload)
        },
        updateQuantity({ commit }, payload) {
            commit('updateQty', payload)
        },
        deleteProduct({ commit }, payload) {
            commit('deleteProduct', payload)
        }
    }
}
export default cart;