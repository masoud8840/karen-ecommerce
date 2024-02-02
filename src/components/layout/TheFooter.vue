<template>
  <footer>
    <section class="footer-inner container">
      <section class="company_description">
        <Logo class="footer_logo" />
        <ul class="company_description-items">
          <li>
            <p class="company_text">
              با شما عهد میکنیم. با ما ، خریدی تازه و شگفت انگیز تجربه کنید
            </p>
          </li>
          <li>
            <p>تلفن تماس: 54443214-021</p>
          </li>
          <li>
            <p>پست الکترونیکی: info@karen-shop.com</p>
          </li>
          <li>
            <p>
              آدرس: شهریار - فاز دو مخابرات - کوچه کوشش - کوچه کارا - پلاک 21
            </p>
          </li>
        </ul>
      </section>
      <section class="information_links">
        <h4 class="section-title orange">اطلاعات</h4>
        <ul class="information_links-options">
          <li v-for="(link, index) in informationLinks" :key="index">
            <router-link :to="{ name: 'Home' }">{{ link }}</router-link>
          </li>
        </ul>
      </section>
      <section class="information_links">
        <h4 class="section-title orange">لینک های مفید</h4>
        <ul class="information_links-options">
          <li v-for="(link, index) in usefulLinks" :key="index">
            <router-link :to="{ name: 'Home' }">{{ link }}</router-link>
          </li>
        </ul>
      </section>
    </section>

    <section class="footer-copyright container">
      <h4>
        تمامی حقوق مادی و معنوی این وبسایت متعلق به
        <span class="text-orange">فروشگاه کارن</span> میباشد ©
      </h4>
    </section>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import Logo from "../icons/Logo.vue";
const informationLinks = ref([
  "شرایط و ضوابط",
  "حریم خصوصی",
  "بازگشت و باز پرداخت",
  "ارسال و تحویل",
  "سوالات متداول",
]);
const usefulLinks = ref([
  "سبد خرید",
  "لیست مورد علاقه",
  "خدمات مشتری",
  "درباره ما",
  "تماس با ما",
]);
</script>
