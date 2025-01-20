import { ref, onBeforeUpdate, onMounted, watchEffect } from "vue";
import dayjs from "dayjs";
export default function () {
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
    monthsShort: "Янв_Фев_Март_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Нояб_Дек".split(
      "_"
    ),
    firstDayOfWeek: 1,
  };
  const date = ref("");
  const optionsFn = (d: string) => {
    return d >= dayjs().format("YYYY/MM/DD");
  };
  const cardWrapper = ref<HTMLElement>();
  const wrapperHeight = ref(0);
  const open = ref(false);

  onMounted(() => {
    if (cardWrapper.value) {
      wrapperHeight.value = cardWrapper.value.getBoundingClientRect().height;
    }
  });
  return {
    myLocale,
    open,
    date,
    optionsFn,
  };
}
