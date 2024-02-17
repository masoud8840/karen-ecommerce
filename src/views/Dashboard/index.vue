<template>
  <main class="dashboard-view">
    <dashboard-navbar />
    <router-view></router-view>
  </main>
</template>
<script setup>
import DashboardNavbar from "../../components/layout/DashboardNavbar.vue";
</script>
