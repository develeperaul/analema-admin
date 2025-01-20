<template>
  <transition
    appear
    enter-active-class="animated slideInLeft"
    leave-active-class="animated slideOutRight"
    mode="out-in"
  >
    <div :key="step" class="tw-w-full tw-grow" :class="stepClass">
      <component
        :is="stepComponent"
        @prev="prev"
        @next="next"
        @to="to"
        v-bind="steps[step]?.props"
      />
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import type { Component, PropType } from "vue";
type StepComponent = { component: Component };
export default defineComponent({
  props: {
    steps: {
      required: true,
      type: Array as PropType<StepComponent[]>,
    },
    stepClass: {
      default: "",
      type: String,
    },
  },
  setup(props) {
    const step = ref(0);
    const stepComponent = computed(() => {
      // console.log(props.steps[step.value].component);
      return props.steps[step.value].component;
    });
    const hist = ref([0]);
    const prev = () => {
      if (step.value >= 0) {
        // step.value--;
        if (hist.value.length - 1 > 1) {
          hist.value.splice(hist.value.length - 1);
          step.value = +hist.value.splice(hist.value.length - 1, 1);
        } else {
          hist.value.splice(hist.value.length - 1, 1);
          step.value = 0;
        }
      }
    };
    const next = () => {
      const lengthtep = props.steps.length - 1;
      if (lengthtep >= step.value) {
        step.value++;
        hist.value.push(step.value);
      }
    };
    const to = (s: number) => {
      hist.value.push(s);
      step.value = s;
    };
    return {
      step,
      stepComponent,
      next,
      prev,
      to,
      hist,
    };
  },
});
</script>
<style lang="scss" scoped></style>
