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
      d="M13.9999 2.625C11.5972 2.625 9.62495 4.59725 9.62495 7V7.875H5.3042L5.24995 8.69575L4.37495 24.4457L4.31982 25.375H23.6792L23.6249 24.4449L22.7499 8.69488L22.6948 7.875H18.3749V7C18.3749 4.59725 16.4027 2.625 13.9999 2.625ZM13.9999 4.375C14.6961 4.375 15.3638 4.65156 15.8561 5.14384C16.3484 5.63613 16.6249 6.30381 16.6249 7V7.875H11.3749V7C11.3749 6.30381 11.6515 5.63613 12.1438 5.14384C12.6361 4.65156 13.3038 4.375 13.9999 4.375ZM6.94482 9.625H9.62495V12.25H11.3749V9.625H16.6249V12.25H18.3749V9.625H21.0551L21.8207 23.625H6.18007L6.94482 9.625Z"
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