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
        <ul class="featured_products-arrows arrows-hr">
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

    <section class="three_columned_list-container container">
      <section class="most_off-container">
        <section class="most_off-header">
          <h3 class="section-title orange">پر تخفیف ترین ها</h3>
          <ul class="arrows-vr">
            <li>
              <button>
                <Arrow :width="12" direction="up" color="#fdac16" />
              </button>
            </li>
            <li>
              <button>
                <Arrow :width="12" direction="down" color="#fdac16" />
              </button>
            </li>
          </ul>
        </section>
        <section class="most_off-products_list">
          <Swiper
            direction="vertical"
            :slides-per-view="2"
            :space-between="15"
            :height="564"
          >
            <SwiperSlide v-for="i in 5">
              <HorizontalCard />
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
      <section class="most_sale-container">
        <section class="most_sale-header">
          <h3 class="section-title orange">پر فروش ترین ها</h3>
          <ul class="arrows-vr">
            <li>
              <button>
                <Arrow :width="12" direction="up" color="#fdac16" />
              </button>
            </li>
            <li>
              <button>
                <Arrow :width="12" direction="down" color="#fdac16" />
              </button>
            </li>
          </ul>
        </section>
        <section class="most_sale-products_list">
          <Swiper
            direction="vertical"
            :slides-per-view="2"
            :space-between="15"
            :height="564"
          >
            <SwiperSlide v-for="i in 5">
              <HorizontalCard />
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
      <section class="most_rate-container">
        <section class="most_rate-header">
          <h3 class="section-title orange">پر ستاره ترین ها</h3>
          <ul class="arrows-vr">
            <li>
              <button>
                <Arrow :width="12" direction="up" color="#fdac16" />
              </button>
            </li>
            <li>
              <button>
                <Arrow :width="12" direction="down" color="#fdac16" />
              </button>
            </li>
          </ul>
        </section>

        <section class="most_rate-products_list">
          <Swiper
            direction="vertical"
            :slides-per-view="2"
            :space-between="15"
            :height="564"
          >
            <SwiperSlide v-for="i in 5">
              <HorizontalCard />
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
    </section>
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
import HorizontalCard from "../components/Products/HorizontalCard.vue";
const featuredProductsTabs = ref(["منتخب کاربران", "جدید ترین ها", "جراجی ها"]);
const featuredProductsActiveTab = ref("منتخب کاربران");
function handleChangeFeaturedProductsActiveTab(tab) {
  featuredProductsActiveTab.value = tab;
}
</script>
