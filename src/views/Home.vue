<template>
  <main class="home-view">
    <section class="categories-showcase container">
      <article class="showcase1">
        <h3>Showcase 1</h3>
      </article>
      <article class="showcase2">
        <section class="showcase-overlay">
          <router-link :to="{ name: 'Home' }">
            جعبه های ابزار آماده کارن
          </router-link>
        </section>
      </article>
      <article class="showcase3">
        <h3>Showcase 3</h3>
      </article>
      <article class="showcase4">
        <h3>Showcase 4</h3>
      </article>
    </section>

    <section class="container categories-slider">
      <swiper
        :slides-per-view="4"
        :space-between="30"
        :pagination="{ clickable: true }"
        :modules="[Autoplay, Pagination]"
      >
        <swiper-slide>
          <h3>دسته بندی ها</h3>
          <Tools :width="96" />
          <button class="btn btn-primary">مشاهده همه</button>
        </swiper-slide>
        <swiper-slide v-for="(category, index) in Categories" :key="index">
          <CreativeCard :title="category.title" />
        </swiper-slide>
      </swiper>
    </section>

    <section class="free_delivery">
      <section class="free_delivery-inner container">
        <h3><span>ارسال رایگان </span>با اولین خرید</h3>
        <section class="line-through">
          <p>در اولین سفارش سبد خرید خود را رایگان تحویل بگیرید</p>
        </section>
      </section>
    </section>

    <section class="banner-2x2 container">
      <router-link :to="{ name: 'Home' }" v-for="i in 4" :key="i">
        <img :src="`/images/BannerEx${i}.webp`" alt="banner" />
      </router-link>
    </section>

    <section class="featured_products-container container">
      <section class="featured_products-header">
        <ul class="featured_products-options">
          <template v-for="(tab, index) in featuredProductsTabs" :key="index">
            <li>
              <button
                :class="{ active: featuredProductsActiveTab === tab }"
                @click="handleChangeFeaturedProductsActiveTab(tab)"
              >
                {{ tab }}
              </button>
            </li>
            <hr
              class="line-orange"
              v-if="index !== featuredProductsTabs.length - 1"
            />
          </template>
        </ul>
        <ul class="featured_products-arrows">
          <li v-for="i in ['right', 'left']" :key="i">
            <button>
              <Arrow :width="22" color="#fdac16" :direction="i" fill="red" />
            </button>
          </li>
        </ul>
      </section>
      <section class="featured_products-slider">
        <Swiper :slides-per-view="3" :space-between="30">
          <SwiperSlide><VerticalCard /></SwiperSlide>
          <SwiperSlide><VerticalCard /></SwiperSlide>
          <SwiperSlide><VerticalCard /></SwiperSlide>
          <SwiperSlide><VerticalCard /></SwiperSlide>
        </Swiper>
      </section>
    </section>

    <router-link :to="{ name: 'Home' }" class="fluid-banner container">
      <img
        src="/public/images/FluidBannerPlaceholder.png"
        alt="banner"
        class=""
      />
    </router-link>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CreativeCard from "../components/Products/CreativeCard.vue";
import Tools from "../components/icons/Tools.vue";
import Categories from "../data/Categories.json";
import Arrow from "../components/icons/Arrow.vue";
import VerticalCard from "../components/Products/VerticalCard.vue";
const featuredProductsTabs = ref(["منتخب کاربران", "جدید ترین ها", "جراجی ها"]);
const featuredProductsActiveTab = ref("منتخب کاربران");
function handleChangeFeaturedProductsActiveTab(tab) {
  featuredProductsActiveTab.value = tab;
}
</script>
