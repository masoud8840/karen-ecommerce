<template>
  <section class="horizontal_card-container">
    <section class="horizontal_card-description">
      <section class="horizontal_card-name_brand-container">
        <h5 class="horizontal_card-name">ست تکمیل لوازم کار کارن</h5>
        <span class="horizontal_card-brand">فروشگاه کارن</span>
      </section>

      <section class="horizontal_card-rating">
        <Star :width="18" v-for="i in 4" />
      </section>
      <section class="horizontal_card-price">
        <h6 class="horizontal_card-new_price">3,100,000</h6>
        <section class="horizontal_card-old_price_off">
          <p class="horizontal_card-old_price">4,500,000</p>
          <span class="horizontal_card-off">-15%</span>
        </section>
      </section>
    </section>
    <img
      src="/public/images/PlaceholderImage.avif"
      alt="product image"
      class="horizontal_card-img"
    />
  </section>
</template>

<script setup>
import Star from "../icons/Star.vue";
</script>
