<template>
  <div class="checbox-container">
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      :id="uid"
      :disabled="disabled"
      hidden
    />

    <label class="label" :for="uid">
      <svg class="checkbox__icon" viewBox="0 0 22 22">
        <rect
          width="21"
          height="21"
          x=".5"
          y=".5"
          fill="#FFF"
          stroke="#868EA1"
          stroke-width="1"
          rx="2"
          class="round"
        />

        <path
          class="tick"
          stroke="#ffffff"
          fill="none"
          stroke-width="2"
          d="M6 10l4 4 6-6"
        />
      </svg>
      <!-- <span class="checkbox"></span> -->
      {{ label }}
    </label>
    <!-- <div>
      <button type="button" @click="handleChange(value)">
        {{ checked ? value : "🙅‍♂️" }} {{ checked ? "checked" : "unchecked" }}
      </button>
    </div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue";
import { useField } from "vee-validate";
export default defineComponent({
  props: {
    // The group's value
    modelValue: {
      type: Boolean,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      required: true,
      type: String,
    },
    rules: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const uid = getCurrentInstance()?.uid;
    const { checked, handleChange } = useField(props.name, undefined, {
      type: "checkbox",
      initialValue: props.modelValue,
      checkedValue: props.modelValue,
    });
    // const { errorMessage, value, meta } = useField(props.name, props.rules, {
    //   validateOnValueUpdate: false,
    //   initialValue: props.modelValue,
    //   label: props.label,
    // });
    // // select/unselect the input
    // handleChange(props.value);
    return {
      uid,
      checked, // readonly
      // handleChange,
    };
  },
});
</script>
<style lang="scss" scoped>
.checkbox-container {
  @apply tw-relative tw-flex;
}
.label {
  @apply tw-flex tw-items-center tw-gap-2 tw-text-sm tw-cursor-pointer;
}
.checkbox__icon {
  width: 14px;
  height: 14px;

  display: block;
  .round {
    transition: all 0.07s ease-out;
    stroke: theme("colors.gray-border");
    fill: theme("colors.gray-second");
  }
  .tick {
  }
}
.checkbox__icon .tick {
  stroke-dasharray: 20px;

  stroke-dashoffset: 20px;

  transition: stroke-dashoffset 0.2s ease-out;
}
label:hover .checkbox__icon .round {
  stroke: theme("colors.blue");
}
.checkbox__input:checked + label .checkbox__icon .tick {
  stroke-dashoffset: 0;
}
.checkbox__input:checked + label .checkbox__icon .round {
  stroke: theme("colors.blue");
  fill: theme("colors.blue");
}
.checkbox__input:disabled:checked + label {
  color: theme("colors.input-hover");
}
.checkbox__input:disabled:checked + label .checkbox__icon .round {
  stroke: theme("colors.gray-border");
  fill: theme("colors.gray-second");
}

.checkbox__input:disabled:checked + label .checkbox__icon .tick {
  stroke-dashoffset: 0;
}
</style>
