<template>
  <section class="card card_creative">
    <h4 class="card-title">{{ props.title }}</h4>
    <router-link :to="{ name: 'Home' }">مشاهده</router-link>
  </section>
</template>

<script setup>
const props = defineProps({ title: { type: String, required: true } });
</script>
