<script setup>
import Star from "../icons/Star.vue";
import CartPlus from "../icons/CartPlus.vue";
import Heart from "../icons/Heart.vue";
const props = defineProps({
  gridOrList: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section :class="`product_card_base-container ${props.gridOrList}`">
    <section class="product_card_base-image_container">
      <img
        class="product_card_base-image"
        src="/public/images/PlaceholderImage.avif"
        alt="product image"
      />
    </section>

    <section class="product_card_base-body">
      <section class="product_card_base-header">
        <section class="product_card_base-heading">
          <h4 class="product_card_base-title">ست لوازم کار</h4>
          <span class="product_card_base-seller text-muted">دیجی کالا</span>
        </section>
        <ul class="product_card_base-rating">
          <li v-for="i in 4">
            <Star width="18" color="#fdac16" />
          </li>
        </ul>
      </section>
      <section class="product_card_base-footer">
        <section class="product_card_base-price">
          <p class="product_card_base-new_price">3,650,000 تومان</p>
          <section>
            <span class="product_card_base-old_price text-muted"
              >4,200,000</span
            >
            <span class="product_card_base-off_percent ltr">-15%</span>
          </section>
        </section>
        <section class="product_card_base-actions">
          <button>
            <Heart width="24" color="#39354c" hover-color="#fdac16" />
          </button>
          <button>
            <CartPlus width="24" color="#39354c" hover-color="#fdac16" />
          </button>
        </section>
      </section>
    </section>
  </section>
</template>
