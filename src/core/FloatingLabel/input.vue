<template>
  <div class="tw-relative">
    <input
      v-model="value"
      :type="type"
      :id="label"
      placeholder="Test"
      @update:model-value="(e) => $emit('update:modelValue', e)"
      class="tw-peer tw-w-full tw-h-12.5 tw-border tw-px-5 tw-pt-0 tw-text-sm tw-font-bold tw-border-gray tw-text-black focus:tw-outline-none focus:tw-border-blue tw-placeholder-transparent"
      :class="{ '!tw-border-negative': errorMessage }"
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, toRefs,useSlots, computed } from "vue";
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
const emitsInput = defineEmits<{
  (e: "update:modelValue", val: string | number): void;
}>();
const slots = useSlots();
const isAfterSlot = computed(() => (slots.after ? true : false));
const { name, rules, modelValue } = toRefs(propsInput);
const { errorMessage, value } = useField(name, rules, {
  validateOnValueUpdate: true,
  initialValue: modelValue,
});
</script>

<style></style>
