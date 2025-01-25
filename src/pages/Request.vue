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
      <div>
        <div class="tw-font-bold tw-text-lg tw-mb-2">Изображения</div>

        <Fancybox
          :options="{
            Carousel: {
              infinite: false,
            },
          }"
        >
          <div class="tw-grid l:tw-grid-cols-4 tw-gap-3">
            <a
              v-for="src in request.photo"
              :href="'https://analemmatrade.ru/' + src"
              data-fancybox
              class="tw-h-[200px]"
            >
              <img
                class="tw-rounded-md tw-object-cover tw-w-full tw-h-full"
                :src="'https://analemmatrade.ru/' + src"
              />
            </a>
          </div>
        </Fancybox>
      </div>
      <div>
        <div class="tw-font-bold tw-text-lg tw-mb-2">Описание</div>
        <div class="tw-text-sm">{{ request?.description }}</div>
      </div>
      <div v-if="request.status_id === '7291'">
        <div class="tw-font-bold tw-text-lg tw-mb-2">Оцените товар</div>
        <VForm @submit="evaluate" class="tw-grid tw-gap-4">
          <app-input
            label="Цена"
            name="price"
            rules="required"
            v-model="fields.price"
          />

          <app-input
            label="Комментарий"
            name="comment"
            rules="required"
            v-model="fields.comment"
          />
          <div class="tw-flex tw-gap-2">
            <app-button @click="cancel" type="button" text="Отменить" />
            <app-button type="submit" text="Оценить" />
          </div>
        </VForm>
      </div>
      <div v-if="request.status_id === '7292'" class="tw-grid tw-gap-3">
        <div class="tw-font-bold tw-text-lg tw-mb-2">Оценка магазина</div>
        <div class="tw-grid tw-gap-4">
          <CardField title="Цена" :text="request.price" />
          <CardField title="Комментарий" :text="request.comment" />
          <CardField title="Статус" :text="request.status" />
        </div>
      </div>
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
import { getRequest, updateRequest } from "src/api/online-scene";
import { getToken, setInfoPushData } from "src/api";

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

    const evaluate = async () => {
      if (request.value) {
        updateRequest({
          id: props.id,
          comment: fields.value.comment,
          price: fields.value.price,
          status: "7292",
        });
        const { id: userId } = await getToken(request.value.token);

        await setInfoPushData(
          userId,
          "оценка произведена",
          `здравствуйте, стоимость товара составляет ${fields.value.price} руб.`
        );

        request.value = await getRequest(props.id);
      }
    };
    const cancel = async () => {
      if (request.value) {
        updateRequest({
          id: props.id,
          status: "7293",
        });
        const { id: userId } = await getToken(request.value.token);

        await setInfoPushData(userId, "оценка отклонена", "");

        request.value = await getRequest(props.id);
      }
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
        request.value = await getRequest(props.id);
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
      evaluate,
      cancel,
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
