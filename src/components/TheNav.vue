<template>
  <!-- <div class="container">
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/prods">xyz</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div> -->
  <nav class="nav">
    <!-- <h1>{{ get }}</h1> -->
    <div class="container">
      <div class="nav__container">
        <div class="nav__left">
          <router-link :to="{ name: 'Home' }">
            <img src="../assets/images/log.png" />
          </router-link>
        </div>
        <div class="nav__right">
          <li>
            <router-link :to="{ name: 'cart' }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.8em"
                height="1.8em"
                fill="currentColor"
                class="bi bi-cart-check"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                />
                <path
                  d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                />
              </svg>
              <!-- <span class="cartItems">{{ cartData.Quantities }}</span> -->
              <span class="cartItems">{{ getQuantities }}</span>
            </router-link>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
// const cartData = computed({
//   get() {
//     return store.getters.getCart;
//   },
// });
const mapGetters = (getters) => {
  return Object.fromEntries(
    Object.keys(getters).map((getter) => [
      getter,
      computed(() => getters[getter]),
    ])
  );
};
const { getCart, getQuantities } = mapGetters(store.getters);
console.log(getCart);
</script>

<style>
.nav {
  width: 100%;
  height: 70px;
  background: #131921;
}
.nav__container {
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  justify-content: space-between;
}
.nav__left img {
  width: 110px;
}
.nav__right li {
  list-style: none;
}
.nav__right li a {
  text-decoration: none;
  color: #fff;
  position: relative;
}
.cartItems {
  position: absolute;
  top: -12px;
  right: -15px;
  width: 25px;
  height: 25px;
  border: none;
  background: #f08804;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}
</style>