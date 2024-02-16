<template>
  <main class="dashboard-view">
    <h1>this is Dashboard.vue</h1>
    <UserAccount />
  </main>
</template>

<script setup>
import UserAccount from "./UserAccount.vue";
const props = defineProps(["subpage"]);
</script>
