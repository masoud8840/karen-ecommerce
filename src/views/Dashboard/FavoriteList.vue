<template>
  <section class="favorite_list-container container">
    <section class="favorite_list-header">
      <h3>عکس</h3>
      <h3>محصول</h3>
      <h3>قیمت</h3>
      <h3>موجودی</h3>
      <h3>امتیاز کاربران</h3>
      <h3>حذف/افزودن</h3>
    </section>
    <ul class="favorite_list-list">
      <li class="favorite_list-item">
        <img
          src="/public/images/Products/7500WGenerator.svg"
          alt="product image"
        />
        <h4>موتور برق 7500W مدل G1200</h4>
        <span class="text-orange">48,500,000</span>
        <span class="in-stock">موجود</span>
        <ul>
          <li v-for="i in 5"><Star :width="22" /></li>
        </ul>
        <section class="add_delete">
          <button>
            <Heart :width="28" hover-color="#fff" color="#fdac16" />
          </button>
          <button>
            <CartPlus :width="28" hover-color="#fff" color="#fdac16" />
          </button>
        </section>
      </li>
      <li class="favorite_list-item">
        <img
          src="/public/images/Products/7500WGenerator.svg"
          alt="product image"
        />
        <h4>موتور برق 7500W مدل G1200</h4>
        <span class="text-orange">48,500,000</span>
        <span class="out-of-stock">ناموجود</span>
        <ul>
          <li v-for="i in 5"><Star :width="22" /></li>
        </ul>
        <section class="add_delete">
          <button>
            <Heart :width="28" hover-color="#fff" color="#fdac16" />
          </button>
          <button disabled>
            <CartPlus :width="28" hover-color="#fff" color="#fdac16" />
          </button>
        </section>
      </li>
    </ul>
  </section>
</template>

<script setup>
import CartPlus from "../../components/icons/CartPlus.vue";
import Heart from "../../components/icons/Heart.vue";
import Star from "../../components/icons/Star.vue";
</script>
