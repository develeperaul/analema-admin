<template>
  <q-dialog
    :modelValue="modelValue"
    @update:model-value="(val) => $emit('update:modelValue', val)"
  >
    <q-card class="tw-max-w-[410px] tw-w-full" square>
      <q-card-section class="tw-p-6">
        <button type="button" v-close-popup class="tw-float-right">
          <svg
            id="baseline-clear-24px"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="Контур_926"
              data-name="Контур 926"
              d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"
              fill="#3f4557"
            />
            <path
              id="Контур_927"
              data-name="Контур 927"
              d="M0,0H24V24H0Z"
              fill="none"
            />
          </svg>
        </button>
        <div class="tw-clear-both"></div>
        <div class="tw-mb-3 l:tw-mb-6">
          <slot />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script lang="ts" setup>
defineProps<{
  modelValue: boolean;
}>();
</script>
<style lang="scss" scoped></style>
