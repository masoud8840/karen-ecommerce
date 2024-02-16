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
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_187_708)">
      <path
        d="M11.7361 6.37774L17.0123 7.14548L13.196 10.8665L13.0079 11.0499L13.0522 11.3089L13.9524 16.5644L9.23271 14.0834L8.99994 13.961L8.76722 14.0835L4.04603 16.5679L4.94787 11.3105L4.9923 11.0514L4.80412 10.868L0.987835 7.14698L6.26406 6.37924L6.52417 6.34139L6.64046 6.10567L9.00011 1.32282L11.3597 6.10422L11.476 6.3399L11.7361 6.37774Z"
        fill="white"
        stroke="#39354C"
      />
    </g>
    <defs>
      <clipPath id="clip0_187_708">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
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
