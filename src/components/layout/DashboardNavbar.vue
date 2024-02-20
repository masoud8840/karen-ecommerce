<template>
  <header class="container">
    <nav>
      <ul>
        <li v-for="(menuItem, index) in menuItems" :key="index">
          <router-link
            :to="menuItem.link"
            :class="{ active: $route.name === menuItem.link.name }"
            >{{ menuItem.title }}</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
const menuItems = ref([
  {
    title: "حساب کاربری",
    link: { name: "UserAccount" },
  },
  {
    title: "سبد خرید",
    link: { name: "ShoppingCart" },
  },
  {
    title: "لیست مورد علاقه ها",
    link: { name: "FavoriteList" },
  },
  {
    title: "تاریخچه",
    link: { name: "UserAccount" },
  },
]);
</script>
