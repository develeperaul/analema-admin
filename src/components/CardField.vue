<template>
  <div class="card-field">
    <div class="card-field__title">{{ title }}</div>
    <div class="card-field__text">{{ text }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "card-field",
});
</script>
<script lang="ts" setup>
const cardFieldProps = defineProps<{
  title: string;
  text: string;
}>();
</script>
<style lang="scss" scoped>
.card-field {
  @apply tw-px-4 tw-p-1.5 tw-border tw-border-gray;
  &__title {
    @apply tw-text-gray tw-text-xss-2;
  }
  &__text {
  }
}
</style>
