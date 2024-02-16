<template>
  <svg
    :width="props.width"
    :height="props.height || props.width"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 13.25H21.5C21.6989 13.25 21.8897 13.171 22.0303 13.0303C22.171 12.8897 22.25 12.6989 22.25 12.5C22.25 12.3011 22.171 12.1103 22.0303 11.9697C21.8897 11.829 21.6989 11.75 21.5 11.75H3.5C3.30109 11.75 3.11032 11.829 2.96967 11.9697C2.82902 12.1103 2.75 12.3011 2.75 12.5C2.75 12.6989 2.82902 12.8897 2.96967 13.0303C3.11032 13.171 3.30109 13.25 3.5 13.25Z"
      :fill="props.color"
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
    default: "#fdac16",
  },
});
</script>
