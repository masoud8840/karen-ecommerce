<template>
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
        <button type="button" @click="onAddAddress">
          <Plus :width="24" hover-color="#fdac16" />
        </button>
      </section>
      <h3 class="text-center" v-if="!addresses.length">
        هیچ آدرسی برای کاربر ثبت نشده است
      </h3>
      <ul class="addresses-body" v-else>
        <li v-for="(address, index) in addresses" :key="index">
          <AddressPlaceholder
            v-bind="address"
            @on-submit="handleSubmitAddress"
            @on-delete="handleDeleteAddress"
          />
        </li>
      </ul>
    </section>
  </form>
</template>

<script setup>
import Plus from "../../components/icons/Plus.vue";
import AddressPlaceholder from "../../components/UI/AddressPlaceholder.vue";
import { ref } from "vue";
const addresses = ref([
  {
    id: 1,
    addressTitle: "محل کارم",
    exactAddress: "شهریار - فاز دو مخابرات - کوچه کوشش - کوچه کارا - پلاک 21",
  },
]);

function onAddAddress() {
  addresses.value.push({
    id: addresses.value.length + 1,
    addressTitle: "",
    exactAddress: "",
    extraOptions: { isEditing: true },
  });
}

function handleSubmitAddress(newAddressObj) {
  const modifiedAddress = addresses.value.findIndex(
    (address) => address.id === newAddressObj.id
  );
  addresses.value[modifiedAddress] = { ...newAddressObj };
}

function handleDeleteAddress(id) {
  const deletedAddressIndex = addresses.value.findIndex(
    (address) => address.id === id
  );
  
  addresses.value.splice(deletedAddressIndex, 1);
}
</script>
