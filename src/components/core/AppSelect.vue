<template>
  <div class="select" :class="{ active: open }" @click="open = !open">
    <div class="select-top" ref="selectTop">
      <label :class="{ active: modelValue?.id }" ref="labelEl">
        {{ label }}
      </label>
      <div class="tw-flex tw-justify-between">
        <span v-show="modelValue?.value">
          {{ modelValue?.value }}
        </span>
      </div>
    </div>
    <div class="options">
      <div class="options__wrapper">
        <div
          v-for="option in options"
          :key="option.id"
          class="option"
          :class="{ active: modelValue === option }"
          @click="selectOption(option)"
        >
          {{ option.value }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import type { PropType } from "vue";
import { Option } from "src/models/model-select";
export default defineComponent({
  name: "app-select",
  props: {
    modelValue: {
      type: Object as PropType<{} | Option>,
      required: true,
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const selectTop = ref<HTMLElement>();
    const labelEl = ref<HTMLElement>();
    const open = ref();

    const selectOption = (option: Option) => {
      console.log();
      emit("update:modelValue", option);
    };
    onMounted(() => {
      if (labelEl.value && selectTop.value) {
        const labelW = labelEl.value.getBoundingClientRect().width;

        selectTop.value.style.minWidth = 24 + labelW + "px";
      }
    });
    return {
      selectOption,
      open,
      labelEl,
      selectTop,
    };
  },
});
</script>
<style lang="scss" scoped>
.select {
  @apply tw-relative tw-w-full tw-text-dark;
}
.select-top {
  @apply tw-bg-white tw-border tw-border-solid tw-border-gray tw-h-[42px] tw-px-3 tw-relative;
  @apply tw-flex tw-items-center;
  label {
    @apply tw-absolute tw-top-1/2;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
    &.active {
      font-size: 55%;
      top: 3px;

      line-height: 0.688rem;
      transform: translateY(0%);
    }
  }
}
.select.active .select-top {
  @apply tw-border-blue;
}
.select.active .select-top > label {
  font-size: 60%;
  top: 5px;
  font-size: 0.5rem;
  line-height: 0.688rem;
  transform: translateY(0%);
}
.options {
  @apply tw-w-full tw-overflow-hidden;
  @apply tw-absolute tw-max-h-0;
  transition: all 0.2s ease-in-out;
  bottom: -10px;
  transform: translateY(100%);
  &__wrapper {
    @apply tw-flex tw-flex-col tw-whitespace-nowrap tw-rounded-md tw-bg-white tw-border tw-border-solid tw-border-gray;
    .option {
      @apply tw-p-3;
      &:not(:last-child) {
        border-bottom: 1px solid theme("colors.gray");
      }
      &.active {
        @apply tw-bg-gray/50;
      }
    }
  }
}
.select.active .options {
  max-height: 350px;
}
</style>
