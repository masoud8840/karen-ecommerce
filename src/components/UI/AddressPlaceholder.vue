<template>
  <section class="addresses_item-container">
    <section class="addresses_item-header">
      <h5 class="addresses_item-title" v-if="!isEditing">
        {{ props.addressTitle }}
      </h5>
      <input
        v-else
        type="text"
        name="address_title"
        id="address_title"
        placeholder="عنوانی که برای آدرس مورد نظر میخواهید*"
        v-model="address.addressTitle"
      />
      <section class="addresses_item-actions">
        <button type="button" @click="onDelete">حذف</button>
        <button type="button" class="btn-primary" @click="onSubmit">
          {{ isEditing ? "تایید" : "تصحیح" }}
        </button>
      </section>
    </section>
    <section class="address_item-body">
      <p class="addresses_item-subtitle text-muted" v-if="!isEditing">
        {{ props.exactAddress }}
      </p>
      <input
        v-else
        type="text"
        name="exact_address"
        id="exact_address"
        placeholder="آدرس مورد نظر*"
        v-model="address.exactAddress"
      />
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  addressTitle: {
    type: String,
    required: true,
  },
  exactAddress: {
    type: String,
    required: true,
  },
  extraOptions: {
    type: Object,
    default: { isEditing: false },
  },
});
const emits = defineEmits(["onDelete", "onSubmit"]);

const isEditing = ref(props.extraOptions.isEditing);
const address = ref({
  addressTitle: props.addressTitle,
  exactAddress: props.exactAddress,
});
function onSubmit() {
  if (
    address.value.addressTitle.trim() === "" ||
    address.value.exactAddress.trim() === ""
  )
    return;

  if (isEditing.value === true) {
    emits("onSubmit", { ...props, ...address.value });
  }
  isEditing.value = !isEditing.value;
}

function onDelete() {
  emits("onDelete", props.id);
}
</script>
