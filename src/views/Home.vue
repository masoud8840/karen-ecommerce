<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CreativeCard from "../components/Products/CreativeCard.vue";
import Tools from "../components/icons/Tools.vue";
import Categories from "../data/Categories.json";
</script>

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
        :scrollbar="{ draggable: true }"
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
  </main>
</template>
