<script setup>
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
</script>

<template>
  <TheNavbar />
  <router-view></router-view>
  <TheFooter />
</template>
