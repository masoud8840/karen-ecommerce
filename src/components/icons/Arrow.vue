<script setup>
import { computed } from "vue";
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
  direction: {
    type: String,
    required: true,
  },
});

const rotateDependingOnDirection = computed(() => {
  if (props.direction === "down") {
    // return noting
  }
  if (props.direction === "up") {
    return "180deg";
  }
  if (props.direction === "left") {
    return "90deg";
  }
  if (props.direction === "right") {
    return "-90deg";
  }
});
</script>
<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.8723 7.32325L11 14.0223L4.12776 7.32325C4.00498 7.20332 3.84015 7.13618 3.66851 7.13618C3.49688 7.13618 3.33205 7.20332 3.20926 7.32325C3.14981 7.3815 3.10258 7.45103 3.07034 7.52776C3.03809 7.6045 3.02148 7.68689 3.02148 7.77012C3.02148 7.85336 3.03809 7.93575 3.07034 8.01249C3.10258 8.08922 3.14981 8.15875 3.20926 8.217L10.5201 15.345C10.6485 15.4701 10.8207 15.5402 11 15.5402C11.1793 15.5402 11.3515 15.4701 11.4799 15.345L18.7908 8.21837C18.8506 8.16008 18.8982 8.09038 18.9307 8.01339C18.9632 7.93641 18.9799 7.85369 18.9799 7.77012C18.9799 7.68656 18.9632 7.60384 18.9307 7.52686C18.8982 7.44987 18.8506 7.38017 18.7908 7.32187C18.668 7.20194 18.5032 7.1348 18.3315 7.1348C18.1599 7.1348 17.995 7.20194 17.8723 7.32187V7.32325Z"
      :fill="props.color"
    />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  transition: rotate 0.2s;
  rotate: v-bind(rotateDependingOnDirection);
}
</style>
