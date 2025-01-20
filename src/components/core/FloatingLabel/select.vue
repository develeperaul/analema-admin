<style lang="scss" scoped>
//$

.select-wrapper {
  position: relative;
  width: 100%;
}
.select {
  @apply tw-border tw-border-input-gray tw-flex tw-items-center tw-px-5 tw-text-sm tw-font-bold tw-relative tw-bg-white;
  height: 50px;
  width: 100%;
  z-index: 10;
  &-invalid {
    @apply tw-border-negative;
  }
  &-input {
    padding: 0;
    border: none;
  }
  &::before,
  &::after {
    content: "";

    position: absolute;
    top: 50%;
    right: 16px;

    display: block;
    width: 9px;
    height: 1px;

    transition: all 0.3s ease-out;

    background-color: #c2c8ce;

    transform: translate(-3px, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(3px, -50%) rotate(-45deg);
  }
}

.select.select.active {
  @apply tw-border-blue;
  &::before {
    transform: translate(-3px, -50%) rotate(-45deg);
  }

  &::after {
    transform: translate(3px, -50%) rotate(45deg);
  }
}
.select-label {
  @apply tw-text-gray tw-font-bold tw-absolute tw-left-5 tw-top-4 tw-text-sm tw-transition-all;
  z-index: 11;
}

.select.active ~ .select-label,
.select:not([data-selectValue=""]) ~ .select-label {
  @apply tw-top-1 tw-text-xss;
}
.options {
  @apply tw-rounded-base tw-shadow-base tw-bg-white;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 50px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  z-index: 100;
  .option {
    @apply tw-px-5 tw-py-5 tw-text-lg;
    height: 25px;
    display: flex;
    align-items: center;

    &.active,
    &:hover {
      @apply tw-text-blue;
      background: rgba(53, 104, 249, 0.2);
    }
  }
}

.select.active ~ .options {
  max-height: 130px;
  overflow-y: auto;
}
</style>

<template>
  <div class="select-wrapper" data-index>
    <div
      v-if="!search"
      class="select"
      :class="[{ ' select-invalid': errorMessage }, { active: openSelect }]"
      ref="select"
      @click="openSelect = !openSelect"
      data-selectValue
    >
      {{ selected.label }}
    </div>
    <FloatingInput
      v-else
      class="select select-input"
      v-bind="{
        label,
        name,
      }"
      @focus="openSelect = !openSelect"
      @blur="blurInput"
      v-model="value"
      ref="select"
      :class="{ active: openSelect }"
    />
    <div class="options" ref="options" v-if="filterOptions.length > 0">
      <div
        class="option"
        v-for="option in filterOptions"
        :key="option.id"
        :data-value="option.id"
        @click="choiceOptions(option)"
      >
        {{ option.label }}
      </div>
    </div>
    <div class="options" ref="options" v-else>
      <div class="option">Ничего не найдено</div>
    </div>
    <div class="select-label" v-if="!search">{{ label }}</div>
  </div>
</template>
<script setup lang="ts">
import { useField } from "vee-validate";
export interface Option {
  id: number | null;
  label: string | null;
}
import {
  ref,
  onMounted,
  defineProps,
  defineEmits,
  computed,
  watch,
  toRefs,
  onUnmounted,
  onBeforeUpdate,
} from "vue";

const propsSelect = withDefaults(
  defineProps<{
    choice?: Option;
    label: string;
    optionsData: Option[];
    initChoice?: boolean;
    name: string;
    rules?: string;
    search?: boolean;
  }>(),
  {
    initChoice: () => true,
    search: false,
  }
);
console.log(propsSelect.choice);

const emitsSelect = defineEmits<{
  (e: "update:choice", val: Option): void;
}>();
const { name, rules, initChoice, choice } = toRefs(propsSelect);
const { errorMessage, value } = useField(name, rules, {
  validateOnValueUpdate: false,
});
const select = ref(null);
const openSelect = ref(false);
const options = ref(null);
const selected = ref<Option>({
  id: null,
  label: null,
});
const valueInput = ref("");
const choiceOptions = (obj: Option): void => {
  selected.value = obj;
  if (obj.id) {
    if (propsSelect.search && obj.label) {
      value.value = obj.label;
    } else {
      value.value = obj;
    }
    openSelect.value = false;
  }
  emitsSelect("update:choice", obj);

  if (select.value && !propsSelect.search) {
    select.value.dataset.selectvalue = obj.id == null ? "" : obj.id;
  }
  if (options.value) {
    const optionEls = options.value.children;
    Array.from(optionEls).forEach((option) => {
      if (option.classList.contains("active"))
        option.classList.remove("active");
    });
    let opt = Array.from(optionEls).find(
      (option) => +option.dataset.value === obj.id
    );
    if (opt) opt.classList.add("active");
  }
};

const targetClick = (e) => {
  let currentElem = e.target;
  let open = false;
  // console.log(currentElem);
  while (currentElem) {
    if (currentElem.hasAttribute("data-index")) {
      open = true;
      break;
    } else currentElem = currentElem.parentElement;
  }
  if (!open && openSelect.value && !e.composedPath().includes(select.value)) {
    openSelect.value = false;
  }
};
const blurInput = () => {
  const opt = filterOptions.value.find(
    (opt) => opt.label?.toLowerCase() == value.value?.toLowerCase()
  );

  if (opt) {
    choiceOptions(opt);
  } else {
    value.value = "";
    choiceOptions({
      id: null,
      label: null,
    });
  }
  // value.value = "";
};
const filterOptions = computed(() => {
  if (propsSelect.search && propsSelect.optionsData) {
    return propsSelect.optionsData.filter((opt) => {
      if (value.value === "" || !value.value) return true;
      else
        return (
          opt.label?.toLowerCase()?.indexOf(value.value.toLowerCase()) > -1
        );
    });
  }
  return propsSelect.optionsData;
});

onMounted(() => {
  if (initChoice.value && propsSelect.optionsData.length > 0) {
    if (propsSelect.choice) choiceOptions(propsSelect.choice);
    else choiceOptions(propsSelect.optionsData[0]);
  }
  window.addEventListener("click", targetClick);
});
onUnmounted(() => window.removeEventListener("click", targetClick));
watch(initChoice, (val) => {
  if (val && propsSelect.optionsData.length > 0) {
    if (propsSelect.choice) choiceOptions(propsSelect.choice);
    else choiceOptions(propsSelect.optionsData[0]);
  }
});
watch(
  () => propsSelect.choice,
  (val) => {
    console.log(val);

    if (val) choiceOptions(val);
    // else {
    //   choiceOptions({
    //     id: null,
    //     label: null,
    //   });
    // }
  }
);
</script>
