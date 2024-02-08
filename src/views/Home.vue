<template>
  <main class="home-view">
    <section class="categories-showcase container">
      <article
        v-for="(showcase, index) in showcaseItems"
        :key="index"
        :class="`showcase${index}`"
      >
        <section class="showcase-overlay">
          <router-link :to="{ name: showcase.link.name }">
            {{ showcase.title }}
          </router-link>
        </section>
      </article>
    </section>

    <section class="container categories-slider">
      <swiper
        :slides-per-view="categoriesSliderConfig.slidesPerView"
        :space-between="categoriesSliderConfig.spaceBetween"
        :modules="categoriesSliderConfig.modules"
        :pagination="categoriesSliderConfig.pagination"
        :breakpoints="categoriesSliderConfig.breakPoints"
      >
        <swiper-slide>
          <h3>دسته بندی ها</h3>
          <Tools :width="96" />
          <button class="btn btn-primary">مشاهده همه</button>
        </swiper-slide>
        <swiper-slide v-for="(category, index) in Categories" :key="index">
          <CreativeCard :title="category.title" :link="{ name: 'Home' }" />
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
        <Swiper
          :slides-per-view="featuredProductsSliderConfig.slidesPerView"
          :space-between="featuredProductsSliderConfig.spaceBetween"
          :breakpoints="featuredProductsSliderConfig.breakPoints"
        >
          <SwiperSlide v-for="product in 4" :key="product">
            <CardBase gridOrList="grid" />
          </SwiperSlide>
        </Swiper>
      </section>
    </section>

    <section class="fluid_banner container">
      <router-link :to="{ name: 'Home' }">
        <img src="/public/images/FluidBannerPlaceholder.png" alt="banner" />
      </router-link>
    </section>

    <section class="three_columned_list-container container">
      <section
        v-for="(column, index) in threeColumnedListData"
        :key="index"
        :class="`${column.class}-container`"
      >
        <section :class="`${column.class}-header`">
          <h3 class="section-title orange">{{ column.title }}</h3>
          <ul class="arrows-vr">
            <li>
              <button>
                <Arrow :width="14" direction="up" color="#fdac16" />
              </button>
            </li>
            <li>
              <button>
                <Arrow :width="14" direction="down" color="#fdac16" />
              </button>
            </li>
          </ul>
        </section>
        <section :class="`${column.class}-products_list`">
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

    <section class="monthly_off-container">
      <section class="monthly_off-inner container">
        <section class="monthly_off-description">
          <p>
            سوپر <span>تخفیف</span> این ماه با قیمت <span>2,450,000 تومان</span>
          </p>
          <h3>
            اره زنجیری بنزینی 64 سی سی رونیکس <br />
            <span>مدل 5702</span>
          </h3>

          <section class="countdown">
            <section class="countdown-second">
              <h6>{{ countdown.seconds }}</h6>
              <span>ثانیه</span>
            </section>
            <section class="countdown-minute">
              <h6>{{ countdown.minutes }}</h6>
              <span>دقیقه</span>
            </section>
            <section class="countdown-hour">
              <h6>{{ countdown.hours }}</h6>
              <span>ساعت</span>
            </section>
            <section class="countdown-day">
              <h6>{{ countdown.days }}</h6>
              <span>روز</span>
            </section>
          </section>
        </section>

        <section class="monthly_off-img_container">
          <span class="monthly_off-off_amount ltr">-15%</span>
          <img
            src="/public/images/Products/Chainsaw.svg"
            alt="chainsaw image"
          />
        </section>
      </section>
    </section>

    <section class="banner_1x2 container">
      <section
        class="product_banner-container"
        v-for="(banner, index) in banner1x2"
        :key="index"
      >
        <section class="product_banner-description">
          <span class="product_banner-category">{{ banner.category }}</span>
          <h3 class="product_banner-name">
            {{ banner.name }}
            <span class="product_banner-model">{{ banner.model }}</span>
          </h3>
          <router-link :to="{ name: 'Home' }">
            <Arrow :width="21" direction="right" color="#fdac16" />
            مشاهده بیشتر
          </router-link>
        </section>
        <img
          :src="`/public/images/Products/${banner.img}.svg`"
          :alt="`${banner.name} ${banner.model}`"
        />
      </section>
    </section>

    <section class="partners container">
      <section class="partners-header">
        <h3 class="section-title orange center large">برند های برتر</h3>
      </section>
      <section class="partners-slider">
        <Swiper
          :slides-per-view="partnersSliderConfig.slidesPerView"
          :autoplay="partnersSliderConfig.autoplay"
          :modules="partnersSliderConfig.modules"
          :navigation="partnersSliderConfig.navigation"
          :space-between="partnersSliderConfig.spaceBetween"
          :loop="partnersSliderConfig.loop"
          :breakpoints="partnersSliderConfig.breakPoints"
        >
          <SwiperSlide v-for="i in 15">کوکاکولا</SwiperSlide>
        </Swiper>
      </section>
    </section>

    <section class="newsletter-container background_layer">
      <section class="newsletter-inner container">
        <h3>عضویت در خبرنامه</h3>
        <p>برای اطلاع از اخرین خبر ها و تخفیفات در خبرنامه مشترک شوید</p>
        <section class="input_group">
          <input
            type="text"
            name="newsletterInput"
            id="newsletterInput"
            placeholder="شماره تماس یا ایمیل"
          />
          <button>ثبت نام</button>
        </section>
      </section>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CreativeCard from "../components/Products/CreativeCard.vue";
import Tools from "../components/icons/Tools.vue";
import Categories from "../data/Categories.json";
import Arrow from "../components/icons/Arrow.vue";
import HorizontalCard from "../components/Products/HorizontalCard.vue";
import CardBase from "../components/Products/CardBase.vue";

const showcaseItems = ref([
  {
    link: {
      name: "Home",
    },
    title: "دستگاه جوش",
  },
  {
    link: {
      name: "Home",
    },
    title: "جعبه های ابزار آماده کارن",
  },
  {
    link: {
      name: "Home",
    },
    title: "دمنده",
  },
  {
    link: {
      name: "Home",
    },
    title: "موتور های برق",
  },
]);
const categoriesSliderConfig = ref({
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: { clickable: true },
  modules: [Autoplay, Pagination],
  breakPoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    968: { slidesPerView: 4 },
    1200: { slidesPerView: 5 },
  },
});

const featuredProductsSliderConfig = ref({
  slidesPerView: 1,
  spaceBetween: 30,
  breakPoints: {
    768: { slidesPerView: 2 },
    1100: { slidesPerView: 3 },
  },
});
const featuredProductsTabs = ref(["منتخب کاربران", "جدید ترین ها", "جراجی ها"]);
const featuredProductsActiveTab = ref("منتخب کاربران");

function handleChangeFeaturedProductsActiveTab(tab) {
  featuredProductsActiveTab.value = tab;
}

const threeColumnedListData = ref([
  {
    title: "پر تخفیف ترین ها",
    class: "most_off",
  },
  {
    title: "پر فروش ترین ها",
    class: "most_sale",
  },
  {
    title: "پر ستاره ترین ها",
    class: "most_rate",
  },
]);

const countdown = ref({
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
});

function setCountdown() {
  setInterval(() => {
    const now = new Date().getTime();
    const offEndTime = new Date(2024, 2, 0).getTime();
    const distance = offEndTime - now;

    countdown.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.value.minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    countdown.value.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    countdown.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  }, 1000);
}

onMounted(() => {
  setCountdown();
});

const banner1x2 = ref([
  {
    category: "جک خودرو",
    name: "جک روغنی هیدرولیک 10 تن",
    model: "مدل 4333",
    img: "HydrolicJack",
  },
  {
    category: "موتور برق",
    name: "موتور برق 7500W",
    model: "مدل G1200",
    img: "7500WGenerator",
  },
]);

const partnersSliderConfig = ref({
  slidesPerView: 1,
  autoplay: true,
  modules: [Autoplay, Navigation],
  navigation: { enabled: true },
  spaceBetween: 0,
  loop: true,
  breakPoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    968: {
      slidesPerView: 8,
    },
    1200: {
      slidesPerView: 10,
    },
  },
});
</script>
