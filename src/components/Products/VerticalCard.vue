<template>
  <section class="vertical_card-base">
    <section class="vertical_card-image_container">
      <img src="/public/images/PlaceholderImage.avif" alt="product image" />
      <span class="off_percentage">-15%</span>
    </section>
    <section class="vertical_card-header">
      <section class="vertical_card-heading">
        <h5>ست تکمیل لوازم کار کارن</h5>
        <span>فروشگاه کارن</span>
      </section>
      <section class="vertical_card-rating">
        <Star :width="18" v-for="i in 5" />
      </section>
    </section>
    <section class="vertical_card-footer">
      <section class="vertical_card-price">
        <p class="vertical_card-new_price">3,300,000</p>
        <p class="vertical_card-old_price">4,200,000</p>
      </section>
      <section class="vertical_card-actions">
        <button>
          <Heart :width="28" color="#39354c" hover-color="#fdac16" />
        </button>
        <button>
          <CartPlus :width="32" color="#39354c" hover-color="#fdac16" />
        </button>
      </section>
    </section>
  </section>
</template>

<script setup>
import Star from "../icons/Star.vue";
import CartPlus from "../icons/CartPlus.vue";
import Heart from "../icons/Heart.vue";
// TODO: Props implementation
</script>
