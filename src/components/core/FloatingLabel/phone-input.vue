<template>
  <FloatingInput2
    v-bind="{
      name,
      label,
      maska: '+7(###)-###-##-##',
      rules: `${rules}|cellphone`,
      type: 'tel',
    }"
  />
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const propsPhone = defineProps<{
  name: string;
  label?: string;
  rules?: string;
}>();
</script>
