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
            <li v-for="(category, i) in navbarElementsData" :key="i">
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

const navbarElementsData = ref([
  {
    title: "برقی و شارژی ",
    options: [
      "دریل و پیچ گوشتی",
      "بتن کن و چکش و تخریب و پیکور",
      "سنگ فرز و مینی فرز",
      "کاروارش خانگی",
      "بلوور",
      "پروفیل بر",
      "سشوار صنعتی",
      "اره عمود بر و گرد بر",
      "دستگاه پولیش",
      "تفنگ چسب حرارتی",
      "فرچه سیمی",
    ],
  },
  {
    title: "دستی",
    options: [
      "آچار",
      "پیچ گوشتی",
      "انبر",
      "چکش",
      "تبر",
      "قیچی",
      "کاتر",
      "اره باغبانی",
      "کمان اره",
      "روغن دان",
      "سمپاش",
      "بیلچه",
      "نردبان",
    ],
  },
  {
    title: "بادی و پنوماتیک",
    options: [
      "پیستوله",
      "میخکوب و منگنه کوب",
      "درجه سنج باد",
      "کمپرسور باد",
      "رطوبت گیر پمپ باد",
      "باد پاش",
    ],
  },
  {
    title: "بنزینی و موتوری",
    options: ["اره زنجیری", "حاشیه زن", "پمپ آب", "موتور برق"],
  },
  {
    title: "برش و جوش",
    options: ["دستگاه جوش", "مانومتر", "اتو لوله", "سرپیک و انبر"],
  },
  {
    title: "تجهیزات ایمنی",
    options: ["کلاه", "عینک", "لباس", "کفش"],
  },
  {
    title: "متعلقات ابزار ها",
    options: [
      "متر دستی",
      "متر لیزری",
      "متعلقات ابزار های برقی",
      "متعلقات ابزار های جوش",
      "متعلقات ابزار های بادی",
    ],
  },
]);
</script>
