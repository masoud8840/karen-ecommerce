<template>
  <section class="shopping_cart-container container">
    <section class="shopping_cart-receipt">
      <section class="shopping_cart-coupan">
        <button type="button" class="btn-primary">اعمال تخفیف</button>
        <input type="text" name="coupan" id="coupan" placeholder="کد تخفیف" />
      </section>
      <hr />
      <ul class="shopping_cart_receipt-products">
        <li>
          <h4 class="text-muted">موتور برق 7500W مدل GT1200</h4>
          <span class="text-orange">42,150,000 تومان</span>
        </li>

        <li>
          <h4>جمع کل</h4>
          <span class="text-orange">49,350,000 تومان</span>
        </li>
      </ul>
      <hr />
      <button class="btn-primary btn-checkout">پرداخت صورتحساب</button>
    </section>

    <ul class="shopping_cart-products">
      <li>
        <section class="qty_input vertical">
          <button class="btn-primary" @click="qty++">
            <Arrow :width="24" direction="up" color="#fff" />
          </button>
          <input type="text" name="qty" id="qty" v-model="qty" />
          <button class="btn-primary" @click="qty--">
            <Arrow :width="24" direction="down" color="#fff" />
          </button>
        </section>
        <img src="/public/images/Products/Chainsaw.svg" alt="product image" />
        <section class="shopping_cart-products_description">
          <h4>اره زنجیری بنزینی 45 سی سی مدل 6214</h4>
          <span class="text-orange">3,480,000 تومان</span>
        </section>

        <button type="button" class="btn-close"><Close :width="22" color="#fdac16" hover-color="#fdac16" /></button>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Arrow from "../../components/icons/Arrow.vue";
import Close from "../../components/icons/Close.vue";
// this is for showcase
/* the actuall product in cart will be something like:
[
  {
    name: "",
    price: 0,
    img: "",
    qty: 0,
  }
]

*/

const qty = ref(1);
</script>
