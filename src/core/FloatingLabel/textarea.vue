<template>
  <!-- <textarea placeholder="Поле для ввода"> </textarea> -->
  <div class="tw-relative">
    <textarea
      v-model="value"
      type="text"
      :id="label"
      placeholder="Test"
      @update:model-value="(e) => $emit('update:modelValue', e)"
      class="tw-peer tw-w-full tw-h-24 tw-border tw-p-5 tw-text-sm tw-font-bold tw-border-gray tw-text-black focus:tw-outline-none focus:tw-border-blue tw-placeholder-transparent"
      :class="{ '!tw-border-negative': errorMessage }"
      autocomplete="off"
    >
      <!-- @focus="(e) => $emit('focus', e)"
      @blur="(e) => $emit('blur', e)" -->
    </textarea>
    <label
      class="tw-absolute tw-px-5 tw-left-0 tw-top-1 tw-text-xss tw-text-gray tw-font-bold tw-transition-all peer-placeholder-shown:tw-text-sm peer-placeholder-shown:tw-top-4 peer-focus:tw-top-1 peer-focus:tw-text-xss"
      :for="label"
      >{{ label }}
    </label>
  </div>
</template>

<script>
import { toRefs } from "vue";
import { useField } from "vee-validate";
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { name, rules, modelValue } = toRefs(props);
    const { errorMessage, value } = useField(name, rules, {
      validateOnValueUpdate: false,
      initialValue: modelValue,
    });
    return {
      value,
      errorMessage,
    };
  },
};
</script>

<style></style>
