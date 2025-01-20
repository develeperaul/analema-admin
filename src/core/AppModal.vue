<template>
  <Teleport to="body">
    <Transition
      appear
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutLeft"
      mode="out-in"
    >
      <div v-if="modelValue" class="modal">
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const propsModal = withDefaults(
  defineProps<{
    modelValue: boolean;
    autoClose?: boolean;
  }>(),
  {
    autoClose: true,
  }
);
const emitsModal = defineEmits<{
  (e: "update:modelValue", val: boolean): void;
}>();
watch(
  () => propsModal.modelValue,
  (val) => {
    if (val && propsModal.autoClose)
      setTimeout(() => emitsModal("update:modelValue", false), 5000);
  }
);
</script>
<style lang="scss" scoped>
.modal {
  @apply tw-px-10 tw-py-5 tw-bg-white tw-rounded-md;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9998;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
}
</style>
