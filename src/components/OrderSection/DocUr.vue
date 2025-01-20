<template>
  <div class="tw-px-6 tw-py-4 tw-bg-white">
    <div
      class="tw-border-b tw-border-gray tw-flex tw-justify-between tw-items-center"
    >
      <h3 class="">Юридические документы</h3>
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
      <div
        class="card-list__wrapper tw-pt-5 tw-grid tw-gap-3"
        ref="cardWrapper"
      >
        <input
          hidden
          type="file"
          accept="application/pdf"
          ref="uploadFile"
          @change="fileSelect($event)"
        />
        <div>
          <q-btn
            rounded
            flat
            class="tw-bg-blue tw-text-white tw-py-3 tw-text-xss-2"
            @click="$refs.uploadFile.click()"
          >
            <div class="tw-flex tw-gap-2 tw-items-center">
              <q-icon name="attach_file"></q-icon>
              <span> Прикрепить файл </span>
            </div>
          </q-btn>
        </div>
        <div class="tw-grid tw-gap-2">
          <div
            v-for="(doc, index) in docs"
            :key="index"
            class="tw-flex tw-gap-4"
          >
            <span class="text tw-line-clamp-1">
              {{ doc.name }}
            </span>
            <q-btn
              rounded
              round
              size="0.5rem"
              class="tw-bg-blue tw-text-white"
              icon="close"
              @click="deleteFile(doc.id)"
            />
          </div>
        </div>
        <app-button text="Отправить документы" @click="send" />
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
import { ref, onMounted, onUnmounted, watch } from "vue";
import CardField from "src/components/CardField.vue";
import { useOrdersStore } from "src/stores/order-store";
const offerProps = defineProps<{
  idList: string[];
  id: string | number;
}>();
const offerEmit = defineEmits<{
  (e: "openPopup", message: string): void;
}>();
const uploadFile = ref<HTMLInputElement>();
const cardWrapper = ref<HTMLElement>();
const wrapperHeight = ref(0);
const open = ref(true);
const store = useOrdersStore();
const docs = ref<{ name: string; id: number | string }[]>([]);
const fileSelect = async (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = (target.files as FileList)[0];
  try {
    let doc = { name: "", id: "" };
    const idFile = await store.uploadFile(file);
    const dataFile = await store.getFile(idFile);

    docs.value.push(dataFile);

    setTimeout(() => {
      if (cardWrapper.value) {
        wrapperHeight.value = cardWrapper.value.getBoundingClientRect().height;
      }
    }, 100);
  } catch (e) {
  } finally {
  }
};

const send = async () => {
  const idList = docs.value.map((doc) => String(doc.id));
  // if(idList.length>0)
  try {
    await store.update({ id: String(offerProps.id), documents_ur: idList });
    offerEmit("openPopup", "Спасибо данные загружены");
  } catch (e) {
    throw e;
  }
};
const deleteFile = async (id: string | number) => {
  docs.value = docs.value.filter((doc) => doc.id !== id);
  const idList = docs.value.map((doc) => String(doc.id));
  await store.update({ id: String(offerProps.id), documents_ur: idList });
};
onMounted(() => {
  if (cardWrapper.value)
    wrapperHeight.value = cardWrapper.value.getBoundingClientRect().height;

  Promise.all([...offerProps.idList.map((id) => store.getFile(id))])
    .then((r) => {
      docs.value = [...r];
    })
    .catch()
    .finally(() => {
      setTimeout(() => {
        if (cardWrapper.value) {
          wrapperHeight.value =
            cardWrapper.value.getBoundingClientRect().height;
          console.log(cardWrapper.value.getBoundingClientRect().height);
        }
      }, 100);
    });
});
</script>
<style lang="scss" scoped>
.card-list {
  @apply tw-overflow-hidden tw-h-0;
  transition: height 0.2s ease;
}
</style>
