<template>
  <div class="tw-relative">
    <input
      v-model="value"
      :type="type"
      :id="label"
      placeholder="none"
      @update:model-value="(e) => $emit('update:modelValue', e)"
      class="input tw-peer tw-w-full tw-h-12.5 tw-border tw-px-5 tw-pt-0 tw-text-sm tw-font-bold tw-border-input-gray tw-text-black hover:tw-border-input-hover focus:tw-outline-none focus:tw-border-blue tw-placeholder-transparent"
      :class="[
        { '!tw-border-negative': errorMessage },
        { '!tw-border-success tw-pr-8': meta.dirty && meta.valid },
      ]"
      v-maska="maska"
      @focus="(e) => $emit('focus', e)"
      @blur="(e) => $emit('blur', e)"
      autocomplete="off"
    />
    <label
      class="tw-absolute tw-px-5 tw-left-0 tw-top-1 tw-text-xss tw-text-gray tw-font-bold tw-transition-all peer-placeholder-shown:tw-text-sm peer-placeholder-shown:tw-top-4 peer-focus:tw-top-1 peer-focus:tw-text-xss"
      :for="label"
      >{{ label }}
    </label>
    <div
      class="after tw-absolute tw-right-1.5 tw-top-4 tw-flex tw-items-center tw-gap-2"
    >
      <div class="after-icon" v-if="isAfterSlot" ref="afterContent">
        <slot name="after"></slot>
      </div>
      <svg
        v-if="meta.dirty && meta.valid"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0,0H24V24H0Z" fill="none" />
        <path
          data-name="Контур 1993"
          d="M9,16.17,4.83,12,3.41,13.41,9,19,21,7,19.59,5.59Z"
          fill="#14a473"
        />
      </svg>
    </div>
    <p class="tw-text-negative" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, toRefs, computed, useSlots } from "vue";
import { useField } from "vee-validate";
const propsInput = withDefaults(
  defineProps<{
    label: string;
    modelValue?: string | number;
    type?: string;
    maska?: string;
    name: string;
    rules?: string;
  }>(),
  {
    type: "text",
  }
);
const slots = useSlots();
const isAfterSlot = computed(() => (slots.after ? true : false));
const emitsInput = defineEmits<{
  (e: "update:modelValue", val: string | number): void;
}>();
const { name, rules, modelValue, label } = toRefs(propsInput);
const { errorMessage, value, meta } = useField(name, rules, {
  validateOnValueUpdate: false,
  initialValue: modelValue,
  label,
});
</script>

<style lang="scss">
.input {
  transition: all 0.2s ease-in;
  & ~ .after > .after-icon * {
    transition: all 0.1s ease-in;
  }
  &:focus ~ .after > .after-icon * {
    @apply tw-fill-blue;
  }
}
// .after * {
//   fill: blue;
// }
</style>
