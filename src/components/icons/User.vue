<script setup>
const props = defineProps({
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
  },
  color: {
    type: String,
    default: "#39354C",
  },
  hoverColor: {
    type: String,
    default: "#39354C",
  },
});
</script>

<template>
  <svg
    :width="props.width"
    :height="props.height || props.width"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 4.375C10.6269 4.375 7.875 7.12687 7.875 10.5C7.875 12.6088 8.95125 14.4812 10.5822 15.5864C7.46112 16.9251 5.25 20.0226 5.25 23.625H7C7 19.7487 10.1238 16.625 14 16.625C17.8763 16.625 21 19.7487 21 23.625H22.75C22.75 20.0226 20.5389 16.926 17.4178 15.5855C18.2502 15.0236 18.9322 14.2662 19.4042 13.3796C19.8761 12.4931 20.1236 11.5044 20.125 10.5C20.125 7.12687 17.3731 4.375 14 4.375ZM14 6.125C16.4264 6.125 18.375 8.07363 18.375 10.5C18.375 12.9264 16.4264 14.875 14 14.875C11.5736 14.875 9.625 12.9264 9.625 10.5C9.625 8.07363 11.5736 6.125 14 6.125Z"
    />
  </svg>
</template>
<style lang="scss" scoped>
svg {
  path {
    fill: v-bind("props.color");
  }
  &:hover {
    path {
      fill: v-bind("props.hoverColor");
    }
  }
}
</style>
