<template>
  <div class="tw-px-6 tw-py-4 tw-bg-white">
    <div
      class="tw-border-b tw-border-gray tw-flex tw-justify-between tw-items-center"
    >
      <h3 class="">Выбор даты визита</h3>

      <div class="tw-shrink-0">
        <q-btn
          v-if="!open"
          size="10px"
          round
          icon="add"
          @click="open = true"
        ></q-btn>
        <q-btn
          v-else
          size="10px"
          round
          icon="remove"
          @click="open = false"
        ></q-btn>
      </div>
    </div>
    <div
      class="card-list"
      :style="{ height: open ? wrapperHeight + 'px' : 0 + 'px' }"
    >
      <div ref="cardWrapper">
        <div class="tw-pt-5 tw-flex tw-gap-10 tw-mb-4">
          <q-date
            v-model="date"
            color="secondary"
            :options="optionsFn"
            :events="[event]"
            :locale="myLocale"
            mask="DD-MM-YYYY"
            minimal
            flat
            bordered
          />
          <div class="tw-grid tw-gap-4 tw-content-start">
            <div class="tw-text-sm">Выберите время удобное вам</div>

            <button
              v-for="time in timeOptoins"
              v-ripple
              class="tw-relative tw-shadow-sm tw-bg-blue tw-text-white tw-rounded-[3px] tw-w-[174px] tw-h-8"
              :class="{ 'tw-bg-blue/60': timeOpt?.id === time.id }"
              @click="timeOpt = time"
            >
              {{ time.label }}
            </button>
          </div>
        </div>
        <app-button
          v-if="status.id === '1'"
          text="Обновить дату замера"
          @click="chooseDate"
        />
      </div>
      <!-- <div ref="cardWrapper" v-else-if="status.id === '2'">
        <div>
          {{ status.value }}
        </div>
      </div>
      <div ref="cardWrapper" v-else>Замер проведён.</div> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import dayjs from "dayjs";
export default defineComponent({
  name: "contact",
});
</script>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useOrdersStore } from "src/stores/order-store";
const propsMeasurment = defineProps<{
  status: { id: string; value: string };
  measurement: { date: string; time: { id: number; label: string } };
  id: string;
}>();

const storeOrder = useOrdersStore();
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

const optionsFn = (d: string) => {
  return d >= dayjs().format("YYYY/MM/DD");
};
const timeOpt = ref<{
  id: number;
  label: string;
}>();
const timeOptoins = [
  { id: 12, label: "До обеда" },
  { id: 13, label: "После обеда" },
  { id: 13, label: "После 18:00" },
];
const cardWrapper = ref<HTMLElement>();
const wrapperHeight = ref(0);
const open = ref(true);
const chooseDate = async () => {
  const orderData = JSON.parse(storeOrder.order.data);

  console.log(orderData.wishes.measurement_date);
  orderData.wishes.measurement_date = { date: date.value, time: timeOpt.value };

  await storeOrder.update({
    id: propsMeasurment.id,
    data: JSON.stringify(orderData),
  });
};
const event = computed(() => {
  if (propsMeasurment.measurement.date) {
    const splitDate = propsMeasurment.measurement.date.split("-");
    return [splitDate[2], splitDate[1], splitDate[0]].join("/");
  }
});
onMounted(() => {
  if (cardWrapper.value) {
    wrapperHeight.value = cardWrapper.value.getBoundingClientRect().height;
  }

  // date.value = propsMeasurment.measurement.date;
  timeOpt.value = propsMeasurment.measurement.time;
});
</script>

<style lang="scss" scoped>
.card-list {
  @apply tw-overflow-hidden tw-h-0;
  transition: height 0.2s ease;
}
</style>
