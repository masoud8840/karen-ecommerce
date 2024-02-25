<template>
  <header class="container">
    <nav>
      <button class="navbar_toggler" @click="toggleNavbarToggler">
        <Arrow :width="21" direction="down" />{{ currentActiveSubroute.title }}
      </button>
      <transition name="navbar" mode="in-out">
        <ul v-if="isNavbarTogglerOpen">
          <li v-for="(menuItem, index) in menuItems" :key="index">
            <router-link
              :to="menuItem.link"
              :class="{ active: $route.name === menuItem.link.name }"
              >{{ menuItem.title }}</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, inject, watch } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import Arrow from "../icons/Arrow.vue";

const route = useRoute();

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
    link: { name: "OrdersHistory" },
  },
]);

const currentActiveSubroute = computed(() => {
  return menuItems.value.find((menu) => menu.link.name === route.name);
});

onBeforeRouteUpdate((_, _1, next) => {
  if (isMobile.value) {
    isNavbarTogglerOpen.value = false;
  }
  next();
});

function toggleNavbarToggler() {
  isNavbarTogglerOpen.value = !isNavbarTogglerOpen.value;
}

const isMobile = inject("responsive");
watch(isMobile, (newValue) => {
  isNavbarTogglerOpen.value = !newValue;
});

const isNavbarTogglerOpen = ref(!isMobile.value);
</script>
