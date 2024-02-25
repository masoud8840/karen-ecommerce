<template>
  <section class="orders_history-container container">
    <section class="orders_history-inner">
      <section class="orders_history-header">
        <h3>ردیف</h3>
        <h3>شماره سفارش</h3>
        <h3>تاریخ</h3>
        <h3>وضعیت</h3>
        <h3>مجموع</h3>
        <h3>جزئیات</h3>
      </section>

      <ul class="orders_history-body">
        <li
          class="orders_history-item"
          v-for="(order, index) in ordersHistory"
          :key="index"
        >
          <h4>#{{ formatNumbers(index + 1) }}</h4>
          <h4>#{{ formatNumbers(order.orderId) }}</h4>
          <h4>{{ Formattime(order.orderDate) }}</h4>
          <h4>
            {{ statusToText(order.status) }} ({{
              formatNumbers(order.items.length)
            }}
            محصول)
          </h4>
          <h4>{{ order.totalCart.toLocaleString("fa-IR") }}</h4>
          <router-link
            class="text-orange"
            :to="{ name: 'ShoppingCart', query: { orderId: 1233 } }"
            >مشاهده</router-link
          >
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";

// result from api will look something like this
const ordersHistory = ref([
  {
    orderId: 123,
    orderDate: new Date(2023, 9, 12),
    deliveryDate: new Date(2023, 9, 13),
    // in-delivery - accepted - in-progress
    status: "accepted",
    totalCart: 6850000,
    items: [
      {
        title: "",
        // ....
      },
      {
        title: "",
        // ....
      },
    ],
  },
]);
function Formattime(date) {
  return new Date(date).toLocaleDateString("fa-IR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function statusToText(status) {
  if (status === "accepted") {
    return "تحویل داده شده";
  }
  if (status === "in-delivery") {
    return "در حال ارسال";
  }
  if (status === "in-progress") {
    return "در حال آماده سازی";
  }
}

function formatNumbers(num) {
  return new Number(num).toLocaleString("fa-IR");
}
</script>
