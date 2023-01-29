<template>
  <!-- <h1>Products</h1> -->
  <div class="container">
    <div class="row allProducts">
      <div class="col-3" v-for="(prod, key) in products" :key="key">
        <div class="product__container">
          <div class="product__img">
            <!-- Webpack is a tool that lets you compile JavaScript modules, also known as module bundler.
Given a large number of files, it generates a single file (or a few files) that run your app. -->
            <!-- can convert inline images to data URIs. -->
            <!-- require("path of images ${filename}") to help webpack build those images -->
            <img :src="require(`../assets/images/${prod.image}`)" />
          </div>
          <div class="product__name">
            <!-- full name show nhi hoga 0 to 30 character -->
            <p>{{ prod.name.slice(0, 30) }}...</p>
          </div>
          <div class="product__price"><span>$</span>{{ prod.price }}</div>
          <div class="product__button">
            <!-- @click="addToCart(product)" -->
            <button class="btn btn-cart" @click="addToCart(prod)">
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const products = store.getters.getProducts;
// console.log(products);

function addToCart(prod) {
  store.dispatch("addToCart", prod);
}
</script>
<style scoped>
.allProducts {
  margin-top: -200px;
}
.product {
  margin-top: 25px;
}
.product__container {
  margin-left: 20px;
  background: #fff;
  padding: 15px;
}
.product__img {
  text-align: center;
  margin: 0 auto;
}
.product__img img {
  width: 160px;
  height: 160px;
}
.product__name p {
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  color: #0066c0;
  height: 50px;
  margin: 10px 0;
}
.product__price {
  font-size: 20px;
}
.product__price span {
  font-size: 13px;
}
.btn-cart {
  border: 1px solid #bbb;
  padding: 8px 13px;
  background: linear-gradient(to right, #f8e3ad, #eeba37);
  color: #111;
  border-radius: 3px;
  cursor: pointer;
  font-size: 13px;
  outline: none;
}
.product__button {
  margin-top: 10px;
}
</style>