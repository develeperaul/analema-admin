<template>
  <app-input
    v-bind="{
      name,
      label,
      maska: '+7(###)-###-##-##',
      rules: rules ? `${rules}|cellphone` : 'cellphone',
      type: 'tel',
      modelValue: modelValue,
    }"
    @update:model-value="(e:string) => $emit('update:modelValue', e)"
    @blur="() => $emit('blur')"
  />
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const propsPhone = defineProps<{
  name: string;
  label?: string;
  rules?: string;
  modelValue: string;
}>();
const emitsPhone = defineEmits<{
  (e: "update:modelValue", val: string): void;
  (e: "blur"): void;
}>();
</script>
