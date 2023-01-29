<template>
  <navigation></navigation>
  <router-view />
</template>

<script setup>
import navigation from "./components/TheNav.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  background: #eaeded;
}
/*  */
</style>
