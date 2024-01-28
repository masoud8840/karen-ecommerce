<template>
  <header>
    <nav :class="{ extended: isExtended, navbar: true, container: true }">
      <ul class="navbar-inner">
        <router-link :to="{ name: 'Home' }">
          <Logo />
        </router-link>
        <hr class="horizontal-line" />
        <button
          @click="isDropdownOpen = !isDropdownOpen"
          class="dropdown-toggler"
        >
          محصولات
          <Arrow :width="18" :direction="isDropdownOpen ? 'up' : 'down'" />
        </button>
        <transition name="dropdown" mode="out-in">
          <ul class="container dropdown" v-if="isDropdownOpen">
            <li v-for="(category, i) in Categries" :key="i">
              <h4 class="section-title">{{ category.title }}</h4>
              <ul>
                <li v-for="(link, j) in category.options" :key="j">
                  <router-link :to="{ name: 'Home' }">
                    {{ link }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </transition>
      </ul>
      <ul class="navbar-inner">
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
import Categries from "../../data/Categories.json";

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
