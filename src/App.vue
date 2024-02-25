<script setup>
import { provide, ref } from "vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";

const isUserInMobileDevice = ref(true);
window.addEventListener("resize", handleWindowResize);
function handleWindowResize() {
  isUserInMobileDevice.value = window.innerWidth < 768;
}
handleWindowResize();
provide("responsive", isUserInMobileDevice);
</script>

<template>
  <TheNavbar />
  <router-view></router-view>
  <TheFooter />
</template>
