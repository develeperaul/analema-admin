<template>
  <div class="field">
    <div class="field__wrapper">
      <input
        type="text"
        class="input"
        :class="[
          { '!tw-border-negative': errorMessage && meta.touched },
          {
            '!tw-border-success !tw-pr-8':
              meta.dirty && meta.valid && meta.touched,
          },
        ]"
        @update:model-value="(e) => $emit('update:modelValue', e)"
        v-model="value"
        :placeholder="label"
        @blur="() => $emit('blur')"
        v-maska
        :data-maska="maska"
        :id="uid"
      />

      <label class="label" :for="uid">
        {{ label }}
      </label>
      <div
        class="after tw-absolute tw-right-1.5 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-flex tw-items-center tw-gap-2"
      >
        <div class="after-icon" v-if="isAfterSlot" ref="afterContent">
          <slot name="after"></slot>
        </div>
        <svg
          v-if="meta.dirty && meta.valid && meta.touched"
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
    </div>
    <p class="tw-text-negative tw-text-xs" v-if="!meta.valid && meta.touched">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  getCurrentInstance,
  useSlots,
  computed,
  onMounted,
} from "vue";
import { useField } from "vee-validate";
export default defineComponent({
  name: "app-input",
  props: {
    label: {
      default: "",
      type: String,
    },
    modelValue: {
      default: "",
      type: String,
    },
    maska: {
      default: "",
      type: String,
    },
    rules: {
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
  },
  emits: ["update:modelValue", "valid"],
  setup(props, { emit }) {
    const slots = useSlots();
    const uid = getCurrentInstance()?.uid;

    const isAfterSlot = computed(() => (slots.after ? true : false));

    const { errorMessage, value, meta } = useField(props.name, props.rules, {
      validateOnValueUpdate: false,
      initialValue: props.modelValue,
      label: props.label,
    });
    onMounted(() => emit("valid", meta.valid));
    watch(
      () => meta.valid,
      (val: boolean) => {
        emit("valid", val);
      }
    );
    return { value, uid, isAfterSlot, errorMessage, meta };
  },
});
</script>
<style lang="scss">
.input + .after > .after-icon * {
  transition: all 0.1s ease-in;
}
.input:focus {
  @apply tw-border-blue;
}
.input:focus ~ .after > .after-icon * {
  @apply tw-fill-blue;
}
</style>
<style lang="scss" scoped>
.field__wrapper {
  @apply tw-relative tw-w-full tw-h-[42px];
  .input {
    @apply tw-h-full tw-text-sm  tw-bg-white tw-border tw-border-solid tw-border-gray-second tw-px-3 tw-placeholder-transparent;
    @apply focus:tw-outline-blue focus:-tw-outline-offset-1;
    @apply tw-outline-none tw-w-full;
    transition: all 0.2s ease-in;
    padding-top: 7px;
  }
  label {
    @apply tw-absolute tw-top-1/2 tw-left-3 tw-text-input-hover;
    transition: all 0.2s ease-in-out;
    z-index: 0;
    transform: translateY(-50%);
  }
  .input:focus ~ label,
  .input:not(:placeholder-shown) ~ label {
    font-size: 55%;
    top: 3px;

    line-height: 0.688rem;
    transform: translateY(0%);
  }

  .input.succes {
    @apply tw-border-success;
  }
  .input.invalid {
    @apply tw-border-negative;
  }
}
</style>
