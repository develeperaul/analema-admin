<template>
  <div class="tw-overflow-x-auto" v-if="request">
    <div class="tw-mb-4 tw-flex tw-gap-4">
      <div class="tw-grid tw-gap-1">
        <div class="tw-font-bold">Заявка № {{ request?.id }}</div>
        <div class="tw-text-sm">{{ request?.date }}</div>
      </div>

      <!-- <div class="tw-flex tw-gap-3">
        <app-button text="Изменить статус" @click="modalStatus = true" />
      </div> -->
      <!-- v-if="order.fast_order === '1' && order.status_id === '1'" -->
    </div>
    <div class="tw-grid tw-gap-6">
      <div class="tw-grid tw-gap-3">
        <div class="tw-font-bold tw-text-lg tw-mb-2">Описание</div>
        <div class="tw-grid tw-gap-4">
          <CardField title="Цена" :text="request.name" />
          <CardField title="Комментарий" :text="request.phone" />
        </div>
      </div>
      <div>
        <div class="tw-font-bold tw-text-lg tw-mb-2">Изображения</div>

        <Fancybox
          :options="{
            Carousel: {
              infinite: false,
            },
          }"
        >
          <div class="tw-grid tw-grid-cols-4 tw-gap-3">
            <a
              v-for="src in request.photo"
              :href="'https://analemmatrade.ru/' + src"
              data-fancybox
              class="tw-h-[200px] tw-2-[200px]"
            >
              <img
                class="tw-rounded-md tw-object-cover tw-w-full tw-h-full"
                :src="'https://analemmatrade.ru/' + src"
              />
            </a>
          </div>
        </Fancybox>
      </div>

      <app-button @click="updateStatus" type="button" text="Одобрить" />
      <!-- <popup v-model="modalPopup">
        <p class="tw-flex tw-justify-center">
          {{ message }}
        </p>
      </popup> -->
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useApplication } from "src/stores/application";
import Fancybox from "src/components/Fancybox.vue";
import CardField from "src/components/CardField.vue";
import { Option } from "src/models/model-select";
import { getOSDetail, updateOS } from "src/api/os";

import "@fancyapps/ui";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useApplication();
    const modalContacts = ref(false);
    const com = ref("");
    const request = ref(null);
    const modalPopup = ref(false);
    const message = ref("");
    const loading = ref(false);
    const fields = ref({
      comment: "",
      price: "",
    });

    const updateStatus = async () => {
      await updateOS({
        id: props.id,
        status: "7298",
      });
      await getOSDetail(props.id);
    };

    const popupEvent = (e: string) => {
      message.value = e;
      modalPopup.value = true;
    };
    const statusList = [
      { status_id: "1", status_value: "Новый, ожидает обработки" },
      { status_id: "2", status_value: "Ожидает замера" },
      { status_id: "3", status_value: "Замер произведен, ожидает подписания" },
      { status_id: "4", status_value: "Ожидает оплаты" },
      { status_id: "5", status_value: "Оплачен" },
      { status_id: "6", status_value: "Производися" },
      { status_id: "7", status_value: "Завершен" },
    ];
    const modalStatus = ref(false);

    onMounted(async () => {
      loading.value = true;
      try {
        request.value = await getOSDetail(props.id);
      } catch (e) {
        throw e;
      }
    });
    return {
      store,
      modalContacts,

      modalPopup,
      message,
      popupEvent,
      modalStatus,

      statusList,
      request,
      fields,
      updateStatus,
      com,
    };
  },
  components: {
    CardField,
    Fancybox,
  },
});
</script>
<style lang="scss" scoped></style>
