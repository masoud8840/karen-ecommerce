<template>
  <header>
    <nav :class="{ extended: isExtended, navbar: true, container: true }">
      <section class="navbar-inner">
        <router-link :to="{ name: 'Home' }" class="navbar_logo_link">
          <Logo class="navbar_logo" />
        </router-link>
        <hr class="horizontal-line" />
        <button @click="toggleDropdown" class="dropdown-toggler">
          محصولات
          <Arrow :width="18" :direction="isDropdownOpen ? 'up' : 'down'" />
        </button>
        <transition name="dropdown" mode="out-in">
          <ul class="container dropdown" v-if="isDropdownOpen">
            <Close
              :width="32"
              hover-color="#fdac16"
              class="dropdown-close_btn"
              @click="toggleDropdown"
            />
            <li
              class="dropdown-parent_category"
              v-for="(category, i) in Categries"
              :key="i"
            >
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
      </section>
      <section class="navbar-inner">
        <router-link :to="{ name: 'Home' }">
          <Bag :width="32" />
        </router-link>
        <hr class="horizontal-line" />
        <router-link :to="{ name: 'UserAccount' }">
          <User :width="32" />
        </router-link>
      </section>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import User from "../icons/User.vue";
import Logo from "../icons/Logo.vue";
import Bag from "../icons/Bag.vue";
import Arrow from "../icons/Arrow.vue";
import Close from "../icons/Close.vue";
import Categries from "../../data/Categories.json";

const isDropdownOpen = ref(false);
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}
const isExtended = ref(true);
function scrollHandler() {
  isExtended.value = window.scrollY <= 50;
}
window.addEventListener("scroll", scrollHandler);
</script>
