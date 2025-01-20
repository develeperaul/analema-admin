<template>
  <button class="button" :disabled="disable">{{ text }}</button>
</template>
<script lang="ts" setup>
const buttonProps = defineProps<{
  text: string;
  disable?: boolean;
}>();
</script>
<style lang="scss" scoped>
button {
  @apply tw-flex tw-items-center tw-justify-center;
  @apply tw-px-3 tw-py-3 tw-bg-blue tw-text-white tw-text-base;
  transition: all 0.2s ease-in;
  border-radius: 3px;
  &:hover {
    @apply tw-bg-blue-hover;
  }
  &.active,
  &:active {
    @apply tw-bg-blue-active;
  }

  &[disabled] {
    @apply tw-bg-gray-border tw-text-line;
  }
  &.invalid {
    @apply tw-bg-negative;
    &:hover {
      @apply tw-bg-negative-hover;
    }
    &:active {
      @apply tw-bg-negative-active;
    }
  }
}
</style>
