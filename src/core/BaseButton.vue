<template>
  <button
    class="button tw-w-full tw-relative tw-z-10"
    :class="`button-${bg}`"
    v-ripple
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      default: "blue",
    },
  },
};
</script>

<style lang="scss" scoped>
//$
.button-blue {
  @apply tw-bg-blue tw-text-white;
}
.button-negative {
  @apply tw-bg-negative tw-text-white;
}

.button-white {
  @apply tw-bg-white tw-text-black;
}
</style>
