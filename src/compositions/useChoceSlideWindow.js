import { ref, onBeforeUpdate, onMounted, watchEffect } from "vue";

export default function (sliderItems, init = 1) {
  const initWindow = ref(init);
  const wind = ref(null);
  const format = ref([]);

  const choiceELement = (id) => {
    sliderItems.map((item) => {
      if (item.id === id) {
        wind.value = item;
        Array.from(format.value).forEach((slider) => {
          const svg = slider.querySelector("svg");
          svg.classList.remove("active");
          if (slider.dataset.id == id) {
            svg.classList.add("active");
          }
        });
      }
    });
  };
  const setItemFormat = (el) => {
    if (el) format.value.push(el);
    // format.value.push(
    //   Array.from(el.childNodes).find((item) => item.tagName === "svg")
    // );
  };
  onBeforeUpdate(() => {
    format.value = [];
  });
  onMounted(() => {
    choiceELement(initWindow.value);
  });
  return {
    format,
    initWindow,
    wind,
    choiceELement,
    setItemFormat,
  };
}
