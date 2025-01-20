<template>
  <app-input
    v-bind="{
      name,
      label,
      maska: '##.##.####',
      rules: `dateformat:${now},${showDates}`,
      type: 'text',
    }"
    @blur="() => $emit('blur')"
    @update:model-value="(e:string) => $emit('update:modelValue', e)"
    v-model="date"
  >
    <template v-slot:after>
      <svg
        @click="() => (popup = true)"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="20"
        viewBox="0 0 18 20"
      >
        <path
          id="XMLID_262_"
          d="M7,11H9v2H7ZM21,6V20a2.006,2.006,0,0,1-2,2H5a2,2,0,0,1-2-2L3.01,6A1.991,1.991,0,0,1,5,4H6V2H8V4h8V2h2V4h1A2.006,2.006,0,0,1,21,6ZM5,8H19V6H5ZM19,20V10H5V20Zm-4-7h2V11H15Zm-4,0h2V11H11Z"
          transform="translate(-3 -2)"
          fill="#3f4557"
        />
      </svg>
    </template>
  </app-input>
  <div>
    <q-popup-proxy
      cover
      transition-show="scale"
      transition-hide="scale"
      :model-value="popup"
      @hide="popup = false"
    >
      <q-date
        v-model="date"
        color="secondary"
        :options="optionsFn"
        :locale="myLocale"
        mask="DD.MM.YYYY"
        minimal
      >
        <div class="row items-center justify-end q-gutter-sm">
          <q-btn label="Отмена" color="secondary" flat v-close-popup></q-btn>
          <q-btn label="OK" color="secondary" flat v-close-popup></q-btn>
        </div>
      </q-date>
    </q-popup-proxy>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref, watch, toRef, onMounted } from "vue";
import dayjs from "dayjs";

let now = dayjs().format("DD.MM.YYYY");

const myLocale = {
  /* starting with Sunday */
  days: "Восскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split(
    "_"
  ),
  daysShort: "Вос_Пн_Вт_Ср_Чт_Пт_Суб".split("_"),
  months:
    "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split(
      "_"
    ),
  monthsShort: "Янв_Фев_Март_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Нояб_Дек".split("_"),
  firstDayOfWeek: 1,
};
const date = ref("");

const propsDate = withDefaults(
  defineProps<{
    modelValue: string;
    name: string;
    label?: string;
    rules?: string;
    showDates?: string;
  }>(),
  {
    showDates: "all",
  }
);
const modelValue = toRef(propsDate, "modelValue");
const emitDate = defineEmits<{
  (e: "update:modelValue", val: string): void;
  (e: "blur"): void;
}>();
const popup = ref(false);
const optionsFn = (d: string) => {
  if (propsDate.showDates === "<") return d < dayjs().format("YYYY/MM/DD");
  if (propsDate.showDates === ">") return d > dayjs().format("YYYY/MM/DD");
  if (propsDate.showDates === "<=") return d <= dayjs().format("YYYY/MM/DD");
  if (propsDate.showDates === ">=") return d >= dayjs().format("YYYY/MM/DD");

  return true;
};
onMounted(() => {
  if (modelValue.value) date.value = modelValue.value;
});
watch(
  () => propsDate.modelValue,
  (val) => {
    date.value = propsDate.modelValue;
    emitDate("update:modelValue", val);
  }
);
watch(
  () => date.value,
  (val) => {
    emitDate("update:modelValue", val);
  }
);
</script>
