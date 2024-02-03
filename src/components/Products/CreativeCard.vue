<template>
  <section class="card card_creative">
    <h4 class="card-title">{{ props.title }}</h4>
    <router-link :to="props.link">مشاهده</router-link>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: Object,
    required: true,
  },
});
</script>
