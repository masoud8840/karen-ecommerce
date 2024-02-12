<template>
  <h1>this is useraccount.vue</h1>
  <form class="user_account-view container">
    <section class="input_group col full_name-input_group">
      <label for="fullname" class="section-title orange"
        >نام و نام خانوادگی</label
      >
      <input type="text" name="fullname" id="fullname" />
    </section>
    <section class="input_group col email_or_phone">
      <label for="emailOrPhone" class="section-title orange"
        >پست الکترونیکی یا شماره همراه</label
      >
      <input type="text" name="emailOrPhone" id="emailOrPhone" />
    </section>
    <section class="addresses-container">
      <section class="addresses-header">
        <h4 class="section-title orange">آدرس ها</h4>
        <button type="button">
          <Plus :width="24" hover-color="#fdac16" />
        </button>
      </section>
      <section class="addresses-body">
        <section class="addresses_item-container">
          <section class="addresses_item-header">
            <h5 class="addresses_item-title">محل کار</h5>
            <section class="addresses_item-actions">
              <button type="button">تصحیح</button>
              <button type="submit" class="btn-primary">حذف</button>
            </section>
          </section>
          <section class="address_item-body">
            <p class="addresses_item-subtitle text-muted">
              شهریار - فاز دو مخابرات - کوچه کوشش - کوچه کارا - پلاک 21
            </p>
          </section>
        </section>
      </section>
    </section>
  </form>
</template>

<script setup>
import Plus from "../../components/icons/Plus.vue";
</script>
