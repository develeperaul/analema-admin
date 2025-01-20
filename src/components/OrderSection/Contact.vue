<template>
  <div class="tw-px-6 tw-py-4 tw-bg-white">
    <div
      class="tw-border-b tw-border-gray tw-flex tw-justify-between tw-items-center"
    >
      <h3 class="">Контактная информация</h3>
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
      class="card-list !tw-overflow-visible"
      :style="{ height: open ? wrapperHeight + 'px' : 0 + 'px' }"
    >
      <div
        class="card-list__wrapper tw-pt-5 tw-grid tw-gap-3"
        ref="cardWrapper"
      >
        <CardField title="ФИО" :text="contact_fio" />
        <CardField title="Телефон" :text="contact_phone" />
        <CardField title="Адрес" :text="contact_address" />
        {{ contact_city.value }}
        <div class="tw-mt-5">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "contact",
});

</script>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted,watch } from "vue";
import CardField from "src/components/CardField.vue";

const contactProps = defineProps<{
  contact_fio: string;
  contact_phone: string;
  contact_address: string;
  contact_city:string
}>();
const cardWrapper = ref<HTMLElement>();
const wrapperHeight = ref(0);
const open = ref(true);

onMounted(() => {
  if (cardWrapper.value) {
    wrapperHeight.value = cardWrapper.value.getBoundingClientRect().height;
  }
});

</script>
<style lang="scss" scoped>
.card-list {
  @apply tw-overflow-hidden tw-h-0;
  transition: height 0.2s ease;
}
</style>
