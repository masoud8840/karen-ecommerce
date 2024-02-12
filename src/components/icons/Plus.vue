<template>
  <svg
    :width="props.width"
    :height="props.height || props.width"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.2159 5.375V13.2159H5.375V14.7841H13.2159V22.625H14.7841V14.7841H22.625V13.2159H14.7841V5.375H13.2159Z"
      fill="#39354C"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    default: null,
  },
  color: {
    type: String,
    default: "#39354C",
  },
  hoverColor: {
    type: String,
    default: "#39354c",
  },
});
</script>

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
