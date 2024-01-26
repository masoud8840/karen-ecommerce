<template>
  <header>
    <nav :class="{ extended: isExtended, navbar: true, container: true }">
      <ul>
        <router-link :to="{ name: 'Home' }">
          <Logo />
        </router-link>
        <hr class="horizontal-line" />
        <button
          @click="isDropdownOpen = !isDropdownOpen"
          class="dropdown-toggler"
        >
          محصولات
          <Arrow :width="22" :direction="isDropdownOpen ? 'up' : 'down'" />
        </button>
        <transition name="dropdown" mode="out-in">
          <ul class="container dropdown" v-if="isDropdownOpen">
            <li>someo</li>
            <li>someo</li>
            <li>someo</li>
            <li>someo</li>
          </ul>
        </transition>
      </ul>
      <ul>
        <router-link :to="{ name: 'Home' }">
          <Bag :width="32" />
        </router-link>
        <hr class="horizontal-line" />
        <router-link :to="{ name: 'Home' }">
          <User :width="32" />
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import User from "../icons/User.vue";
import Logo from "../icons/Logo.vue";
import Bag from "../icons/Bag.vue";
import Arrow from "../icons/Arrow.vue";

const isDropdownOpen = ref(false);
const isExtended = ref(true);
function scrollHandler() {
  if (window.scrollY > 50) {
    isExtended.value = false;
  } else {
    isExtended.value = true;
  }
}
window.addEventListener("scroll", scrollHandler);
</script>
